import { NgModule } from '@angular/core';
import { TruncatePostTitlePipe } from './truncate-post-title.pipe';

@NgModule({
    declarations: [TruncatePostTitlePipe],
    exports: [TruncatePostTitlePipe]
})
export class PostViewerPipesModule {}
