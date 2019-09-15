import { User } from '../user.model';
import { ADD_USER, DELETE_USER, FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESSFULLY } from './users.constants';

export interface UsersState {
  usersIdSequence: number;
  usersList: User[];
  isLoadingUsers: boolean;
  errorMessage: string;
}

const initialState: UsersState = {
  usersIdSequence: 0,
  usersList: [],
  isLoadingUsers: false,
  errorMessage: null
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
    case FETCH_USERS: {
      return {
        ...state,
        isLoadingUsers: true
      };
    }
    case FETCH_USERS_SUCCESSFULLY: {
      return {
        usersIdSequence: action.payload.length,
        usersList: action.payload,
        isLoadingUsers: false
      };
    }
    case FETCH_USERS_ERROR: {
      return {
        ...state,
        isLoadingUsers: false,
        errorMessage: action.payload
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
