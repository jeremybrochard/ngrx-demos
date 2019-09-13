import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UsersState, usersReducer } from '../users/reducer/users.reducer';

export interface State {
  users: UsersState;
}

export const reducers: ActionReducerMap<State> = {
  users: usersReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
