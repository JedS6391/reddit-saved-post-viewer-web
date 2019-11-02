import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListComponent } from './post-list.component';
import { PostListFilterModule } from './post-list-filter/post-list-filter.module';

@NgModule({
    imports: [CommonModule, PostListFilterModule],
    declarations: [PostListComponent],
    exports: [PostListComponent]
})
export class PostListModule {}
