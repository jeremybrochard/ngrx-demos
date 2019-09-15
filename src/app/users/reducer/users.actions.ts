import { User } from '../user.model';
import { ADD_USER, DELETE_USER, FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESSFULLY } from './users.constants';

export const addUser = (newUser: User) => ({
  type: ADD_USER,
  payload: newUser
});

export const deleteUser = (userId: number) => ({
  type: DELETE_USER,
  payload: userId
});

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const fetchUsersSuccessfully = (users: User[]) => ({
  type: FETCH_USERS_SUCCESSFULLY,
  payload: users
});

export const fetchUsersError = (error: any) => ({
  type: FETCH_USERS_ERROR,
  payload: error
});
