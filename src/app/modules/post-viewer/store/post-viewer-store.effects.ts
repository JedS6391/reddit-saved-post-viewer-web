import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { PostViewerApiService } from '../api/post-viewer-api.service';
import * as actions from './post-viewer-store.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PostViewerEffects {
    constructor(
        private actions$: Actions,
        private postViewerApiService: PostViewerApiService
    ) {}

    @Effect()
    public getUserDetails$ = this.actions$.pipe(
        ofType<actions.GetUserDetails>(actions.GetUserDetails.TYPE),
        switchMap(() => {
            return this.postViewerApiService.getUser().pipe(
                map(userDetails => new actions.GetUserDetailsSuccess(userDetails)),
                catchError(error => of(new actions.GetUserDetailsFailure(error)))
            );
        })
    );

    @Effect()
    public getSavedPosts$ = this.actions$.pipe(
        ofType<actions.GetSavedPosts>(actions.GetSavedPosts.TYPE),
        switchMap(action => {
            return this.postViewerApiService.getSavedPosts(action.limit, action.subreddit).pipe(
                map(job => new actions.GetSavedPostsSuccess(job)),
                catchError(error => of(new actions.GetSavedPostsFailure(error)))
            );
        })
    );

    @Effect()
    public getJobStatus$ = this.actions$.pipe(
        ofType<actions.GetJobStatus>(actions.GetJobStatus.TYPE),
        switchMap(action => {
            return this.postViewerApiService.getJobStatus(action.job).pipe(
                map(jobStatus => new actions.GetJobStatusSuccess(jobStatus)),
                catchError(error => of(new actions.GetJobStatusFailure(error)))
            );
        })
    );
}
