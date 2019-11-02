import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details.component';
import { SpinnerModule } from '../../shared/spinner/spinner.module';

@NgModule({
    imports: [CommonModule, SpinnerModule],
    declarations: [UserDetailsComponent],
    exports: [UserDetailsComponent]
})
export class UserDetailsModule {}
