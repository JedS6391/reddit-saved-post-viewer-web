import { Routes } from '@angular/router';
import { AuthorisationComponent } from './authorisation/modules/authorisation.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: AuthorisationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];
