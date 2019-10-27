import { Action } from '@ngrx/store';

import { AuthorisationState } from './authorisation-state';
import * as actions from './authorisation-store.actions';
import { applyReducers } from '../../../shared/apply-reducers';

export const AUTHORISATION_INITIAL_STATE: AuthorisationState = {
    oAuthUrl: null,
    token: null,
    isLoading: false,
    lastError: null
};

export function authorisationReducer(state: AuthorisationState = AUTHORISATION_INITIAL_STATE, action: Action) {
    return applyReducers(state, action, {
        [actions.GetOAuthUrlAction.TYPE]: getOAuthUrlActionHandler,
        [actions.GetOAuthUrlSuccessAction.TYPE]: getOAuthUrlActionSuccessHandler,
        [actions.GetOAuthUrlFailureAction.TYPE]: getOAuthUrlActionFailureHandler
    });
}

function getOAuthUrlActionHandler(state: AuthorisationState): AuthorisationState {
    return {
        ...state,
        isLoading: true
    };
}

function getOAuthUrlActionSuccessHandler(state: AuthorisationState, action: actions.GetOAuthUrlSuccessAction): AuthorisationState {
    return {
        ...state,
        isLoading: false,
        oAuthUrl: action.oAuthUrl
    };
}


function getOAuthUrlActionFailureHandler(state: AuthorisationState, action: actions.GetOAuthUrlFailureAction): AuthorisationState {
    return {
        ...state,
        isLoading: false,
        lastError: action.error
    };
}
