export const AUTHORISATION_API_URLS = {
    generateUrl: '/auth/generate_url',
    validate: (state: string, code: string) => `/validate?state=${state}&code=${code}`
};
