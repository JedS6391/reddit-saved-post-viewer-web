import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROOT_ROUTES } from './root.routes';
import { RootComponent } from './root.component';
import { AUTHORISATION_BASE_URL_TOKEN } from './modules/authorisation/api/authorisation-api.service';
import { POST_VIEWER_BASE_URL_TOKEN } from './modules/post-viewer/api/post-viewer-api.service';
import { environment } from 'src/environments/environment';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(ROOT_ROUTES),
    ],
    declarations: [RootComponent],
    providers: [
        {
            provide: AUTHORISATION_BASE_URL_TOKEN,
            useValue: environment.baseUrl
        },
        {
            provide: POST_VIEWER_BASE_URL_TOKEN,
            useValue: environment.baseUrl
        }
    ],
    bootstrap: [RootComponent]
})
export class RootModule {}
