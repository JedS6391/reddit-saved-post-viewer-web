import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PostViewerComponent } from './post-viewer.component';
import { PostViewerApiModule } from './api/post-viewer-api.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { PostListModule } from './post-list/post-list.module';
import { PostViewerStoreModule } from './store/post-viewer-store.module';
import { PostViewerLandingPageGuard } from './guards/post-viewer-landing-page.guard';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PostViewerApiModule,
        UserDetailsModule,
        PostListModule,
        PostViewerStoreModule
    ],
    declarations: [PostViewerComponent],
    providers: [PostViewerLandingPageGuard]
})
export class PostViewerModule {}
