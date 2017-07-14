// @flow
import type { UserRes } from './user.interface';

type UserState = {
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: number;
  currency?: number;
  passwordHash?: string;
  blocked?: boolean;
  activated?: boolean;
  company?: string;
  id?: string;
  token?: string;
}

type Action = {
  type?: string;
  email?: string;
  password?: string;
  payload?: UserRes
}

export default (state: UserState = {}, action: Action): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
