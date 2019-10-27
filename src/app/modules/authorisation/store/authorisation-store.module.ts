import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AUTHORISATION_STATE_STORE_KEY } from './authorisation-state-store-key';
import { authorisationReducer } from './authorisation-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthorisationEffects } from './authorisation-store.effects';
import { AuthorisationFacade } from './authorisation-store.facade';

@NgModule({
    imports: [
        StoreModule.forFeature(AUTHORISATION_STATE_STORE_KEY, authorisationReducer),
        EffectsModule.forFeature([AuthorisationEffects])
    ],
    providers: [AuthorisationFacade]
})
export class AuthorisationStoreModule {}
