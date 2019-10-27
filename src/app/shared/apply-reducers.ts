import { ActionReducer, Action } from '@ngrx/store';

export interface ReducerMap<T> {
    [index: string]: ActionReducer<T>;
}

export function applyReducers<T>(state: T, action: Action, reducers: ReducerMap<T>): T {
    const handler = reducers[action.type];

    return handler ? handler(state, action) : state;
}
