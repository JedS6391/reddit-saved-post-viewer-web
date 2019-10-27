import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorisationApiModule } from './api/authorisation-api.module';
import { AuthorisationStoreModule } from './store/authorisation-store.module';

@NgModule({
    imports: [
        CommonModule,
        AuthorisationApiModule,
        AuthorisationStoreModule,
    ]
})
export class AuthorisationModule {}
