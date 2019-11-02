export const POST_VIEWER_API_URLS = {
    user: '/reddit/user/',
    savedPosts: '/reddit/posts/saved/',
    jobStatus: (jobId: string) => `/jobs/${jobId}/status/`
};
