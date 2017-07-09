// @flow
type UserState = {
  email?: string;
  password?: string;
}
type Action = {
  type: string;
  email?: string;
  password?: string;
}
export default (state: UserState = {}, action: Action): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, { email: action.email, password: action.password });
    default:
      return state;
  }
};
