// @flow
import type { UserRes } from '../user.interface';

export default (payload: UserRes) => (
  {
    type: 'LOGIN_SUCCESS',
    payload,
  }
);
