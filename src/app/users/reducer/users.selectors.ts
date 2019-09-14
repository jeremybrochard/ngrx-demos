import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserFeatureState } from '../users.module';

export const selectUsersFeatureState = createFeatureSelector<UserFeatureState>('usersFeature');

export const getUsersList = createSelector(
  selectUsersFeatureState,
  (state: UserFeatureState) => state.users.usersList
);
