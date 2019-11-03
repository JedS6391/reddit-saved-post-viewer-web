import { Action } from '@ngrx/store';

import { AuthorisationState } from './authorisation-state';
import * as actions from './authorisation-store.actions';
import { executeReducer, ActionHandlerMap } from '../../../shared/reducer-helpers';

export const AUTHORISATION_INITIAL_STATE: AuthorisationState = {
    oAuthUrl: null,
    token: null,
    isLoading: false,
    lastError: null
};

const handlerMap: ActionHandlerMap<AuthorisationState> = {
    [actions.GetOAuthUrlAction.TYPE]: getOAuthUrlActionHandler,
    [actions.GetOAuthUrlSuccessAction.TYPE]: getOAuthUrlActionSuccessHandler,
    [actions.GetOAuthUrlFailureAction.TYPE]: getOAuthUrlActionFailureHandler,
    [actions.ValidateAction.TYPE]: validateActionHandler,
    [actions.ValidateSuccessAction.TYPE]: validateSuccessActionHandler,
    [actions.ValidateFailureAction.TYPE]: validateFailureActionHandler
};

export function authorisationReducer(state: AuthorisationState = AUTHORISATION_INITIAL_STATE, action: Action) {
    return executeReducer(state, action, handlerMap);
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

function validateActionHandler(state: AuthorisationState): AuthorisationState {
    return {
        ...state,
        isLoading: true
    };
}

function validateSuccessActionHandler(state: AuthorisationState, action: actions.ValidateSuccessAction): AuthorisationState {
    return {
        ...state,
        isLoading: false,
        token: action.token
    };
}


function validateFailureActionHandler(state: AuthorisationState, action: actions.ValidateFailureAction): AuthorisationState {
    return {
        ...state,
        isLoading: false,
        lastError: action.error
    };
}
