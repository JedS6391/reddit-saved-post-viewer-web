import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RedditToken } from '../api/models/token.interface';
import { AuthorisationFacade } from '../store/authorisation-store.facade';

@Injectable()
export class AuthorisationService {
    public readonly token$: Observable<RedditToken>;
    public readonly isAuthorised$: Observable<boolean>;

    constructor(private authorisationFacade: AuthorisationFacade) {
        this.token$ = this.authorisationFacade.getToken();
        this.isAuthorised$ = this.token$.pipe(
            map(token => token !== null && token !== undefined)
        );
    }
}
