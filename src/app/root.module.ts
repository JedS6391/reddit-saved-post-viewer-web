import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROOT_ROUTES } from './root.routes';
import { RootComponent } from './root.component';
import { AUTHORISATION_BASE_URL_TOKEN } from './modules/authorisation/api/authorisation-api.service';
import { POST_VIEWER_BASE_URL_TOKEN } from './modules/post-viewer/api/post-viewer-api.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(ROOT_ROUTES),
    ],
    declarations: [RootComponent],
    providers: [
        // TODO: Get this from config? Consolidate into one injection token?
        {
            provide: AUTHORISATION_BASE_URL_TOKEN,
            useValue: 'http://127.0.0.1:8000/v1'
        },
        {
            provide: POST_VIEWER_BASE_URL_TOKEN,
            useValue: 'http://127.0.0.1:8000/v1'
        }
    ],
    bootstrap: [RootComponent]
})
export class RootModule {}
