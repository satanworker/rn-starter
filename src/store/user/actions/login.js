// @flow

export interface LoginPayload {
  type: 'LOGIN_REQUEST';
  email: string;
  password: string;
}

export default (email: string, password: string): LoginPayload => (
  {
    type: 'LOGIN_REQUEST',
    email,
    password,
  }
);
