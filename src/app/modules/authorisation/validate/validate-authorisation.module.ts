import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateAuthorisationComponent } from './validate-authorisation.component';
import { SpinnerModule } from '../../shared/spinner/spinner.module';

@NgModule({
    imports: [CommonModule, SpinnerModule],
    declarations: [ValidateAuthorisationComponent]
})
export class ValidateAuthorisationModule {}
