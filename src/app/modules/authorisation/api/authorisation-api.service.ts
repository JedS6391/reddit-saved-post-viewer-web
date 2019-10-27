import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import { publishLast, refCount } from 'rxjs/operators';

import { AUTHORISATION_API_URLS } from './authorisation-api.urls';

@Injectable()
export class AuthorisationApiService {

    constructor(private baseUrl: string, private http: Http) {}

    public getOAuthUrl(): Observable<string> {
        const url = `${this.baseUrl}${AUTHORISATION_API_URLS.generateUrl}`;

        return this.http.get(url).pipe(
            publishLast(),
            refCount()
        );
    }

    public validate(state: string, code: string): Observable<string> {
        const url = `${this.baseUrl}${AUTHORISATION_API_URLS.validate(state, code)}`;

        return this.http.get(url).pipe(
            publishLast(),
            refCount()
        );
    }
}
