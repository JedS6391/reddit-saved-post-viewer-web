import { NgModule } from '@angular/core';
import { AuthorisationApiService, AUTHORISATION_BASE_URL_TOKEN } from './authorisation-api.service';

@NgModule({
    providers: [
        AuthorisationApiService
    ]
})
export class AuthorisationApiModule {}
