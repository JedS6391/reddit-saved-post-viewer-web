import { Routes, Route } from '@angular/router';

import { AuthorisationComponent } from './authorisation.component';
import { StartAuthorisationComponent } from './start/start-authorisation.component';
import { ValidateAuthorisationComponent } from './validate/validate-authorisation.component';

export const AUTHORISATION_PATH = 'authorisation';

const AUTHORISATION_ROUTES: Routes = [
    {
        path: '',
        component: AuthorisationComponent,
        children: [
            {
                path: '',
                redirectTo: 'start',
                pathMatch: 'full'
            },
            {
                path: 'start',
                component: StartAuthorisationComponent
            },
            {
                path: 'validate',
                component: ValidateAuthorisationComponent
            }
        ]
    }
];

export const AUTHORISATION_ROOT_ROUTE: Route = {
    path: AUTHORISATION_PATH,
    children: AUTHORISATION_ROUTES
};
