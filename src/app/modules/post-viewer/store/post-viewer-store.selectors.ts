import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostViewerState } from './post-viewer-state';
import { POST_VIEWER_STATE_STORE_KEY } from './post-viewer-state-store-key';

const getPostViewerState = createFeatureSelector<PostViewerState>(POST_VIEWER_STATE_STORE_KEY);

export const getUserDetails = createSelector(
    getPostViewerState,
    state => state.userDetails
);

export const getJob = createSelector(
    getPostViewerState,
    state => state.job
);

export const getJobStatus = createSelector(
    getPostViewerState,
    state => state.jobStatus
);

export const getIsLoadingUserDetails = createSelector(
    getPostViewerState,
    state => state.isLoadingUserDetails
);

export const getIsLoadingJob = createSelector(
    getPostViewerState,
    state => state.isLoadingJob
);

export const getIsPolling = createSelector(
    getPostViewerState,
    state => state.isPolling
);

export const getLastError = createSelector(
    getPostViewerState,
    state => state.lastError
);
