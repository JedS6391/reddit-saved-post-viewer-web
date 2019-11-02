import { Action } from '@ngrx/store';

import { RedditUser } from '../api/models/user.interface';
import { Post, Job, JobStatus } from '../api/models/post.interface';

const POST_VIEWER_STORE_ACTIONS_PREFIX = 'POST VIEWER';

export class GetUserDetails implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET USER DETAILS`;
    public readonly type = GetUserDetails.TYPE;
}

export class GetUserDetailsSuccess implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET USER DETAILS SUCCESS`;
    public readonly type = GetUserDetailsSuccess.TYPE;

    constructor(public userDetails: RedditUser) {}
}

export class GetUserDetailsFailure implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET USER DETAILS FAILURE`;
    public readonly type = GetUserDetailsFailure.TYPE;

    constructor(public error: Error) {}
}

export class GetSavedPosts implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET SAVED POSTS`;
    public readonly type = GetSavedPosts.TYPE;

    constructor(public limit?: number, public subreddit?: string) {}
}

export class GetSavedPostsSuccess implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET SAVED POSTS SUCCESS`;
    public readonly type = GetSavedPostsSuccess.TYPE;

    constructor(public job: Job) {}
}

export class GetSavedPostsFailure implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET SAVED POSTS FAILURE`;
    public readonly type = GetSavedPostsFailure.TYPE;

    constructor(public error: Error) {}
}

export class GetJobStatus implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET JOB STATUS`;
    public readonly type = GetJobStatus.TYPE;

    constructor(public job: Job) {}
}

export class GetJobStatusSuccess implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET JOB STATUS SUCCESS`;
    public readonly type = GetJobStatusSuccess.TYPE;

    constructor(public jobStatus: JobStatus) {}
}

export class GetJobStatusFailure implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} GET JOB STATUS FAILURE`;
    public readonly type = GetJobStatusFailure.TYPE;

    constructor(public error: Error) {}
}

export class BeginPolling implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} BEGIN POLLING`;
    public readonly type = BeginPolling.TYPE;
}

export class EndPolling implements Action {
    public static readonly TYPE = `${POST_VIEWER_STORE_ACTIONS_PREFIX} END POLLING`;
    public readonly type = EndPolling.TYPE;
}
