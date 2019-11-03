import { Action } from '@ngrx/store';

import { PostViewerState } from './post-viewer-state';
import * as actions from './post-viewer-store.actions';
import { executeReducer, ActionHandlerMap } from '../../../shared/reducer-helpers';

export const POST_VIEWER_INITIAL_STATE: PostViewerState = {
    userDetails: null,
    job: null,
    jobStatus: null,
    isLoadingUserDetails: false,
    isLoadingJob: false,
    isPolling: false,
    lastError: null
};

const handlerMap: ActionHandlerMap<PostViewerState> = {
    [actions.GetUserDetails.TYPE]: getUserDetailsHandler,
    [actions.GetUserDetailsSuccess.TYPE]: getUserDetailsSuccessHandler,
    [actions.GetUserDetailsFailure.TYPE]: getUserDetailsFailureHandler,
    [actions.GetSavedPosts.TYPE]: getSavedPostsHandler,
    [actions.GetSavedPostsSuccess.TYPE]: getSavedPostsSuccessHandler,
    [actions.GetSavedPostsFailure.TYPE]: getSavedPostsFailureHandler,
    [actions.GetJobStatus.TYPE]: getJobStatusHandler,
    [actions.GetJobStatusSuccess.TYPE]: getJobStatusSuccessHandler,
    [actions.GetJobStatusFailure.TYPE]: getJobStatusFailureHandler,
    [actions.BeginPolling.TYPE]: beginPollingHandler,
    [actions.EndPolling.TYPE]: endPollingHandler
};

export function postViewerReducer(state: PostViewerState = POST_VIEWER_INITIAL_STATE, action: Action) {
    return executeReducer(state, action, handlerMap);
}

function getUserDetailsHandler(state: PostViewerState): PostViewerState {
    return {
        ...state,
        isLoadingUserDetails: true
    };
}

function getUserDetailsSuccessHandler(state: PostViewerState, action: actions.GetUserDetailsSuccess): PostViewerState {
    return {
        ...state,
        isLoadingUserDetails: false,
        userDetails: action.userDetails
    };
}


function getUserDetailsFailureHandler(state: PostViewerState, action: actions.GetUserDetailsFailure): PostViewerState {
    return {
        ...state,
        isLoadingUserDetails: false,
        lastError: action.error
    };
}

function getSavedPostsHandler(state: PostViewerState): PostViewerState {
    return {
        ...state,
        isLoadingJob: true
    };
}

function getSavedPostsSuccessHandler(state: PostViewerState, action: actions.GetSavedPostsSuccess): PostViewerState {
    return {
        ...state,
        isLoadingJob: false,
        job: action.job
    };
}


function getSavedPostsFailureHandler(state: PostViewerState, action: actions.GetSavedPostsFailure): PostViewerState {
    return {
        ...state,
        isLoadingJob: false,
        lastError: action.error
    };
}

function getJobStatusHandler(state: PostViewerState): PostViewerState {
    return {
        ...state,
        isLoadingJob: true
    };
}

function getJobStatusSuccessHandler(state: PostViewerState, action: actions.GetJobStatusSuccess): PostViewerState {
    return {
        ...state,
        isLoadingJob: false,
        jobStatus: action.jobStatus
    };
}


function getJobStatusFailureHandler(state: PostViewerState, action: actions.GetJobStatusFailure): PostViewerState {
    return {
        ...state,
        isLoadingJob: false,
        lastError: action.error
    };
}

function beginPollingHandler(state: PostViewerState): PostViewerState {
    return {
        ...state,
        isPolling: true
    };
}


function endPollingHandler(state: PostViewerState): PostViewerState {
    return {
        ...state,
        isPolling: false,
    };
}

