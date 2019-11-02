import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from './authorisation-store.actions';
import * as selectors from './authorisation-store.selectors';
import { OAuthUrl } from '../api/models/oauth-url.interface';
import { RedditToken } from '../api/models/token.interface';

@Injectable()
export class AuthorisationFacade {
    constructor(private store: Store<any>) {}

    public fetchOAuthUrl() {
        return this.store.dispatch(new actions.GetOAuthUrlAction());
    }

    public getOAuthUrl(): Observable<OAuthUrl> {
        return this.store.pipe(select(selectors.getOAuthUrl));
    }

    public validate(state: string, code: string) {
        return this.store.dispatch(new actions.ValidateAction(state, code));
    }

    public getToken(): Observable<RedditToken> {
        return this.store.pipe(select(selectors.getToken));
    }

    public getIsLoading(): Observable<boolean> {
        return this.store.pipe(select(selectors.getIsLoading));
    }
}
