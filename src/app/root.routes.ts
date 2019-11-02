import { Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: './modules/app.module#AppModule'
    }
];
