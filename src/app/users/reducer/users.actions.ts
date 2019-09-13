import { ADD_USER, DELETE_USER } from './users.constants';
import { User } from '../user.model';

export const addUser = (newUser: User) => ({
  type: ADD_USER,
  payload: newUser
});

export const deleteUser = (userId: number) => ({
  type: DELETE_USER,
  payload: userId
});
