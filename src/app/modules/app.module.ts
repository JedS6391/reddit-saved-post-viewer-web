import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';

import { AppComponent } from './app.component';
import { AuthorisationModule } from './authorisation/authorisation.module';
import { PostViewerModule } from './post-viewer/post-viewer.module';
import { APP_ROUTES } from './app.routes';
import { environment } from '../../environments/environment';

export function logger(reducer: any): any {
  return storeLogger()(reducer);
}

export const metaReducers = !environment.production ? [logger] : [];

@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES),
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    AuthorisationModule,
    PostViewerModule
  ],
  declarations: [AppComponent],
  providers: []
})
export class AppModule { }
