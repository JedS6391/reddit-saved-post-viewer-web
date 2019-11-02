import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { POST_VIEWER_STATE_STORE_KEY } from './post-viewer-state-store-key';
import { postViewerReducer } from './post-viewer-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostViewerEffects } from './post-viewer-store.effects';
import { PostViewerFacade } from './post-viewer-store.facade';

@NgModule({
    imports: [
        StoreModule.forFeature(POST_VIEWER_STATE_STORE_KEY, postViewerReducer),
        EffectsModule.forFeature([PostViewerEffects])
    ],
    providers: [PostViewerFacade]
})
export class PostViewerStoreModule {}
