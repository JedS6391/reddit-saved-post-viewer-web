import { Routes, Route } from '@angular/router';

import { PostViewerComponent } from './post-viewer.component';
import { PostViewerLandingPageGuard } from './guards/post-viewer-landing-page.guard';

export const POST_VIEWER_PATH = 'post-viewer';

const POST_VIEWER_ROUTES: Routes = [
    {
        path: '',
        component: PostViewerComponent,
        canActivate: [PostViewerLandingPageGuard]
    }
];

export const POST_VIEWER_ROOT_ROUTE: Route = {
    path: POST_VIEWER_PATH,
    children: POST_VIEWER_ROUTES
};
