import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RedditUser } from '../api/models/user.interface';
import { PostViewerFacade } from '../store/post-viewer-store.facade';

@Component({
    selector: 'app-main-post-viewer-user-details',
    templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
    public isLoading$: Observable<boolean>;
    public userDetails$: Observable<RedditUser>;

    constructor(private postViewerFacade: PostViewerFacade) {}

    public ngOnInit(): void {
        this.isLoading$ = this.postViewerFacade.getIsLoadingUserDetails();
        this.userDetails$ = this.postViewerFacade.getUserDetails();
    }
}
