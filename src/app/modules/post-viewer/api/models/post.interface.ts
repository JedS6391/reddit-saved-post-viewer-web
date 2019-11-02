export interface Job {
    jobId: string;
}

export interface JobStatus {
    state: JobState;
    result: Post[];
}

export enum JobState {
    Queued = 'queued',
    Started = 'started',
    Deferred = 'deferred',
    Finished = 'finished',
    Failed = 'failed'
}

export interface Post {
    id: string;
    title: string;
    permalink: string;
}
