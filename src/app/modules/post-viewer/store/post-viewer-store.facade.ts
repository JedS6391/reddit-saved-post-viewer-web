import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as actions from './post-viewer-store.actions';
import * as selectors from './post-viewer-store.selectors';
import { RedditUser } from '../api/models/user.interface';
import { Observable } from 'rxjs';
import { Post, Job, JobStatus } from '../api/models/post.interface';

@Injectable()
export class PostViewerFacade {
    constructor(private store: Store<any>) {}

    public fetchUserDetails() {
        this.store.dispatch(new actions.GetUserDetails());
    }

    public fetchSavedPosts(limit?: number, subreddit?: string) {
        this.store.dispatch(new actions.GetSavedPosts(limit, subreddit));
    }

    public fetchJobStatus(job: Job) {
        this.store.dispatch(new actions.GetJobStatus(job));
    }

    public getUserDetails(): Observable<RedditUser> {
        return this.store.pipe(select(selectors.getUserDetails));
    }

    public getJob(): Observable<Job> {
        return this.store.pipe(select(selectors.getJob));
    }

    public getJobStatus(): Observable<JobStatus> {
        return this.store.pipe(select(selectors.getJobStatus));
    }

    public getIsLoadingUserDetails(): Observable<boolean> {
        return this.store.pipe(select(selectors.getIsLoadingUserDetails));
    }

    public getIsLoadingJob(): Observable<boolean> {
        return this.store.pipe(select(selectors.getIsLoadingJob));
    }

    public getIsPolling(): Observable<boolean> {
        return this.store.pipe(select(selectors.getIsPolling));
    }

    public beginPolling() {
        this.store.dispatch(new actions.BeginPolling());
    }

    public endPolling() {
        this.store.dispatch(new actions.EndPolling());
    }
}
