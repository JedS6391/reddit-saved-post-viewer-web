import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorisationApiModule } from './api/authorisation-api.module';
import { AuthorisationStoreModule } from './store/authorisation-store.module';
import { AuthorisationComponent } from './authorisation.component';
import { StartAuthorisationModule } from './start/start-authorisation.module';
import { ValidateAuthorisationModule } from './validate/validate-authorisation.module';
import { AuthorisationService } from './service/authorisation.service';

@NgModule({
    imports: [
        CommonModule,
        AuthorisationApiModule,
        AuthorisationStoreModule,
        StartAuthorisationModule,
        ValidateAuthorisationModule,
        RouterModule
    ],
    declarations: [AuthorisationComponent],
    providers: [AuthorisationService]
})
export class AuthorisationModule {}
