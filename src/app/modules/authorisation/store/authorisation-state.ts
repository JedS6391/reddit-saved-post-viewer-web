export interface AuthorisationState {
    oAuthUrl: string;
    token: string;
    isLoading: boolean;
    lastError: Error;
}
