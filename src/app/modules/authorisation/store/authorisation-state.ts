import { OAuthUrl } from '../api/models/oauth-url.interface';
import { RedditToken } from '../api/models/token.interface';

export interface AuthorisationState {
    oAuthUrl: OAuthUrl;
    token: RedditToken;
    isLoading: boolean;
    lastError: Error;
}
