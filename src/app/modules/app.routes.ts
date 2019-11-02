import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AUTHORISATION_ROOT_ROUTE } from './authorisation/authorisation.routes';
import { POST_VIEWER_ROOT_ROUTE } from './post-viewer/post-viewer.routes';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                redirectTo: AUTHORISATION_ROOT_ROUTE.path,
                pathMatch: 'full'
            },
            AUTHORISATION_ROOT_ROUTE,
            POST_VIEWER_ROOT_ROUTE
        ]
    }
];
