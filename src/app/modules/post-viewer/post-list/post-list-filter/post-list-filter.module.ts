import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListFilterComponent } from './post-list-filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [PostListFilterComponent],
    exports: [PostListFilterComponent]
})
export class PostListFilterModule {}
