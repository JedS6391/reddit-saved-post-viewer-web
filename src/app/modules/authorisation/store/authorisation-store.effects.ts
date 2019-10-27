import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { AuthorisationApiService } from '../api/authorisation-api.service';
import * as actions from './authorisation-store.actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthorisationEffects {

    constructor(
        private actions$: Actions,
        private authorisationApiService: AuthorisationApiService
    ) {}

    @Effect()
    public getOAuthUrl$ = this.actions$.pipe(
        ofType<actions.GetOAuthUrlAction>(actions.GetOAuthUrlAction.TYPE),
        switchMap(() => {
            return this.authorisationApiService.getOAuthUrl().pipe(
                map(oAuthUrl => new actions.GetOAuthUrlSuccessAction(oAuthUrl)),
                catchError(error => of(new actions.GetOAuthUrlFailureAction(error)))
            );
        })
    );
}
