import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, filter, withLatestFrom, takeUntil } from 'rxjs/operators';

import { PostViewerFacade } from '../store/post-viewer-store.facade';
import { JobState, Post } from '../api/models/post.interface';

const POLLING_INTERVAL = 5000;

@Component({
    selector: 'app-main-post-viewer-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    public isPolling$: Observable<boolean>;
    public savedPosts$: Observable<Post[]>;
    public hasGoldSubscription$: Observable<boolean>;

    private destroyed$ = new Subject();
    private stopPolling$ = new Subject();

    constructor(private postViewerFacade: PostViewerFacade) {}

    public ngOnInit(): void {
        this.isPolling$ = this.postViewerFacade.getIsPolling();
        this.savedPosts$ = this.postViewerFacade
            .getJobStatus()
            .pipe(
                filter(jobStatus => jobStatus && jobStatus.state === JobState.Finished),
                map(jobStatus => jobStatus.result)
            );

        this.savedPosts$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(() => {
                // Every time the saved posts observable omits it means that we've got a completed job
                // which indicates that polling can be completed.
                this.postViewerFacade.endPolling();
                this.stopPolling$.next();
            });

        this.hasGoldSubscription$ = this.postViewerFacade
            .getUserDetails()
            .pipe(map(userDetails => userDetails && userDetails.hasGoldSubscription));

        this.pollJobStatus();
    }

    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.stopPolling$.next();
    }

    public onFilterApplied(): void {
        this.pollJobStatus();
    }

    private pollJobStatus(): void {
        this.postViewerFacade.beginPolling();

        interval(POLLING_INTERVAL).pipe(
            withLatestFrom(this.postViewerFacade.getJob()),
            filter(([, job]) => job !== null && job !== undefined),
            map(([, job]) => {
                this.postViewerFacade.fetchJobStatus(job);
            }),
            takeUntil(this.stopPolling$)
        ).subscribe();
    }
}
