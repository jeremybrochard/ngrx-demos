import { User } from '../user.model';
import { ADD_USER, DELETE_USER } from './users.constants';

export interface UsersState {
  usersIdSequence: number;
  usersList: User[];
}

const initialState: UsersState = {
  usersIdSequence: 3,
  usersList: [
    new User(1, 'Jérémy', 'Brochard'),
    new User(2, 'Alphonse', 'Blum'),
    new User(3, 'Jean', 'Jacques')
  ]
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        usersIdSequence: getNewUserId(state),
        usersList: [...state.usersList, newUser(state, action.payload)]
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        usersList: state.usersList.filter(u => u.id !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
}

function newUser(state: UsersState, user: User): User {
  return { ...user, id: getNewUserId(state) };
}

function getNewUserId(state: UsersState): number {
  return state.usersIdSequence + 1;
}
