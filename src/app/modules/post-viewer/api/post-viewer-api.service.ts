import { Injectable, InjectionToken, Inject, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { publishLast, refCount, takeUntil } from 'rxjs/operators';

import { RedditUser } from './models/user.interface';
import { POST_VIEWER_API_URLS } from './post-viewer-api.urls';
import { Post, Job, JobStatus } from './models/post.interface';
import { AuthorisationService } from '../../authorisation/service/authorisation.service';
import { RedditToken } from '../../authorisation/api/models/token.interface';

export const POST_VIEWER_BASE_URL_TOKEN = new InjectionToken<string>('PostViewerBaseUrl');


@Injectable()
export class PostViewerApiService implements OnDestroy {
    private token: RedditToken;
    private destroyed$ = new Subject();

    constructor(
        @Inject(POST_VIEWER_BASE_URL_TOKEN) private baseUrl: string,
        private http: HttpClient,
        private authorisationService: AuthorisationService
    ) {
        this.authorisationService.token$
            .pipe(
                takeUntil(this.destroyed$)
            )
            .subscribe(token => {
                this.token = token;
            });
    }

    public ngOnDestroy(): void {
        this.destroyed$.next();
    }

    public getUser(): Observable<RedditUser> {
        const url = `${this.baseUrl}${POST_VIEWER_API_URLS.user}`;

        return this.http.get<RedditUser>(url, { headers: this.buildHeaders() }).pipe(
            publishLast(),
            refCount()
        );
    }

    public getSavedPosts(limit?: number, subreddit?: string): Observable<Job> {
        let url = `${this.baseUrl}${POST_VIEWER_API_URLS.savedPosts}`;
        const queryParameters: QueryParameter[] = [];

        if (limit !== null) {
            queryParameters.push({
                name: 'limit',
                value: limit
            });
        }

        if (subreddit !== null) {
            queryParameters.push({
                name: 'subreddit',
                value: subreddit
            });
        }

        url = this.appendQueryParameters(url, queryParameters);

        return this.http.get<Job>(url, { headers: this.buildHeaders() }).pipe(
            publishLast(),
            refCount()
        );
    }

    public getJobStatus(job: Job): Observable<JobStatus> {
        const url = `${this.baseUrl}${POST_VIEWER_API_URLS.jobStatus(job.jobId)}`;

        return this.http.get<JobStatus>(url, { headers: this.buildHeaders() }).pipe(
            publishLast(),
            refCount()
        );
    }

    private buildHeaders(): HttpHeaders {
        return new HttpHeaders({
            Authorization: this.token.token
        });
    }

    private appendQueryParameters(url: string, queryParameters: QueryParameter[]): string {
        if (url.includes('?')) {
            // Existing query parameters.
            url = `${url}&`;
        }

        if (!url.includes('?')) {
            // No existing query parameters.
            url = `${url}?`;
        }

        const queryParameterString = queryParameters
            .map(queryParameter => `${queryParameter.name}=${queryParameter.value}`)
            .join('');

        return `${url}${queryParameterString}`;
    }
}

interface QueryParameter {
    name: string;
    value: any;
 }
