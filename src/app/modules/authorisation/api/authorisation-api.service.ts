import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { publishLast, refCount } from 'rxjs/operators';

import { AUTHORISATION_API_URLS } from './authorisation-api.urls';
import { OAuthUrl } from './models/oauth-url.interface';
import { RedditToken } from './models/token.interface';

export const AUTHORISATION_BASE_URL_TOKEN = new InjectionToken<string>('AuthorisationBaseUrl');

@Injectable()
export class AuthorisationApiService {

    private headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(
        @Inject(AUTHORISATION_BASE_URL_TOKEN) private baseUrl: string,
        private http: HttpClient
    ) {}

    public getOAuthUrl(): Observable<OAuthUrl> {
        const url = `${this.baseUrl}${AUTHORISATION_API_URLS.generateUrl}`;

        return this.http.get<OAuthUrl>(url, {
            headers: this.headers,
            withCredentials: true
        })
        .pipe(
            publishLast(),
            refCount()
        );
    }

    public validate(state: string, code: string): Observable<RedditToken> {
        const url = `${this.baseUrl}${AUTHORISATION_API_URLS.validate(state, code)}`;

        return this.http.get<RedditToken>(url, {
            headers: this.headers,
            withCredentials: true
        }).pipe(
            publishLast(),
            refCount()
        );
    }
}
