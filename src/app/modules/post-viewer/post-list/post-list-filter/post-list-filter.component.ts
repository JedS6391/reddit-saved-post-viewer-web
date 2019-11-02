import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { PostViewerFacade } from '../../store/post-viewer-store.facade';
import { map, takeUntil } from 'rxjs/operators';

const NO_LIMIT = 0;

interface LimitOption {
    label: string;
    value?: number;
}

@Component({
    selector: 'app-main-post-viewer-post-list-filter',
    templateUrl: './post-list-filter.component.html',
    styleUrls: ['./post-list-filter.component.css']
})
export class PostListFilterComponent implements OnInit, OnDestroy {
    @Input()
    public allowSubredditFiltering: boolean;

    @Output()
    public filterApplied = new EventEmitter();

    public isReady$: Observable<boolean>;
    public limitOptions$: Observable<LimitOption[]>;
    public filterFormGroup: FormGroup;

    private destroyed$ = new Subject();

    constructor(private postViewerFacade: PostViewerFacade) {}

    public ngOnInit(): void {
        this.limitOptions$ = this.buildLimitOptions();
        this.filterFormGroup = this.buildForm();

        this.isReady$ = this.postViewerFacade
            .getIsPolling()
            .pipe(map(isPolling => !isPolling));

        this.isReady$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(isReady => {
                if (isReady) {
                    this.filterFormGroup.controls.limit.enable();
                    this.filterFormGroup.controls.subreddit.enable();
                } else {
                    this.filterFormGroup.controls.limit.disable();
                    this.filterFormGroup.controls.subreddit.disable();
                }
            });
    }

    public ngOnDestroy(): void {
        this.destroyed$.next();
    }

    public applyFilter(): void {
        const selectedLimit = this.filterFormGroup.controls.limit.value;
        const selectedSubreddit = this.filterFormGroup.controls.subreddit.value;

        const limit = selectedLimit === NO_LIMIT ?
            null :
            selectedLimit;

        const subreddit = selectedSubreddit === '' ?
            null :
            selectedSubreddit;

        this.postViewerFacade.fetchSavedPosts(limit, subreddit);
        this.filterApplied.emit();
    }

    private buildLimitOptions(): Observable<LimitOption[]> {
        const limits = [10, 50, 100, 500, 100, NO_LIMIT];
        const limitOptions = limits.map(limit => ({
            label: limit === NO_LIMIT ?
                'None' :
                limit.toString(),
            value: limit
        } as LimitOption));

        return of(limitOptions);
    }

    private buildForm(): FormGroup {
        return new FormGroup({
            limit: new FormControl({ value: NO_LIMIT, disabled: true }),
            subreddit: new FormControl({ value: null, disabled: true})
        });
    }
}
