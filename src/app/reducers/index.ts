import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UsersState, usersReducer } from '../users/reducer/users.reducer';
import { UserFeatureState } from '../users/users.module';

export interface State { }

export const reducers: ActionReducerMap<State> = { };
export const effects = [];

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
