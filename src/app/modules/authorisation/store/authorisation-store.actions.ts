import { Action } from '@ngrx/store';
import { OAuthUrl } from '../api/models/oauth-url.interface';
import { RedditToken } from '../api/models/token.interface';

const AUTHORISATION_STORE_ACTIONS_PREFIX = 'AUTHORISATION';

export class GetOAuthUrlAction implements Action {
    public static readonly TYPE = `${AUTHORISATION_STORE_ACTIONS_PREFIX} GET OAUTH URL`;
    public readonly type = GetOAuthUrlAction.TYPE;
}

export class GetOAuthUrlSuccessAction implements Action {
    public static readonly TYPE = `${AUTHORISATION_STORE_ACTIONS_PREFIX} GET OAUTH URL SUCCESS`;
    public readonly type = GetOAuthUrlSuccessAction.TYPE;

    constructor(public oAuthUrl: OAuthUrl) {}
}

export class GetOAuthUrlFailureAction implements Action {
    public static readonly TYPE = `${AUTHORISATION_STORE_ACTIONS_PREFIX} GET OAUTH URL FAILURE`;
    public readonly type = GetOAuthUrlFailureAction.TYPE;

    constructor(public error: Error) {}
}

export class ValidateAction implements Action {
    public static readonly TYPE = `${AUTHORISATION_STORE_ACTIONS_PREFIX} VALIDATE`;
    public readonly type = ValidateAction.TYPE;

    constructor(public state: string, public code: string) {}
}

export class ValidateSuccessAction implements Action {
    public static readonly TYPE = `${AUTHORISATION_STORE_ACTIONS_PREFIX} VALIDATE SUCCESS`;
    public readonly type = ValidateSuccessAction.TYPE;

    constructor(public token: RedditToken) {}
}

export class ValidateFailureAction implements Action {
    public static readonly TYPE = `${AUTHORISATION_STORE_ACTIONS_PREFIX} VALIDATE FAILURE`;
    public readonly type = ValidateFailureAction.TYPE;

    constructor(public error: Error) {}
}

