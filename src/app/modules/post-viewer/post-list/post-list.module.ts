import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './post-list.component';
import { PostListFilterModule } from './post-list-filter/post-list-filter.module';
import { PostViewerPipesModule } from '../pipes/post-viewer-pipes.module';
import { SpinnerModule } from '../../shared/spinner/spinner.module';

@NgModule({
    imports: [
        CommonModule,
        PostListFilterModule,
        PostViewerPipesModule,
        SpinnerModule
    ],
    declarations: [PostListComponent],
    exports: [PostListComponent]
})
export class PostListModule {}
