import { Component, OnInit } from '@angular/core';
import { PostViewerFacade } from './store/post-viewer-store.facade';
import { Observable } from 'rxjs';

const DEFAULT_SAVED_POSTS_LIMIT = 50;

@Component({
  selector: 'app-main-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {
    public isLoading$: Observable<boolean>;

    constructor(private postViewerFacade: PostViewerFacade) {}

    public ngOnInit(): void {
        // Load the data used by sub-components.
        this.postViewerFacade.fetchUserDetails();
        this.postViewerFacade.fetchSavedPosts(DEFAULT_SAVED_POSTS_LIMIT, null);
    }
}
