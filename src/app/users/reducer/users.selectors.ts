import { State } from 'src/app/reducers';
import { createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

export const selectUsers = (state: State) => state.users;

export const getUsersList = createSelector(
  selectUsers,
  (state: UsersState) => {
    return state ? state.usersList : null;
  }
);
