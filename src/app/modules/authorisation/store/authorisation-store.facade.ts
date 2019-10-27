import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from './authorisation-store.actions';
import * as selectors from './authorisation-store.selectors';

@Injectable()
export class AuthorisationFacade {
    constructor(private store: Store<any>) {}

    public fetchOAuthUrl() {
        return this.store.dispatch(new actions.GetOAuthUrlAction());
    }

    public getOAuthUrl(): Observable<string> {
        return this.store.pipe(select(selectors.getOAuthUrl));
    }
}
