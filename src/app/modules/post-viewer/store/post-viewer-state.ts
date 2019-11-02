import { RedditUser } from '../api/models/user.interface';
import { Post, JobStatus, Job } from '../api/models/post.interface';

export interface PostViewerState {
    userDetails?: RedditUser;
    job?: Job;
    jobStatus?: JobStatus;
    isLoadingUserDetails: boolean;
    isLoadingJob: boolean;
    isPolling: boolean;
    lastError: Error;
}
