import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthorisationState } from './authorisation-state';
import { AUTHORISATION_STATE_STORE_KEY } from './authorisation-state-store-key';

const getAuthorisationState = createFeatureSelector<AuthorisationState>(AUTHORISATION_STATE_STORE_KEY);

export const getOAuthUrl = createSelector(
    getAuthorisationState,
    state => state.oAuthUrl
);

export const getToken = createSelector(
    getAuthorisationState,
    state => state.token
);

export const getIsLoading = createSelector(
    getAuthorisationState,
    state => state.isLoading
);

export const getLastError = createSelector(
    getAuthorisationState,
    state => state.lastError
);
