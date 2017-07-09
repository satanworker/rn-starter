// @flow
const Login = (email: string, password: string) => (
  {
    type: 'LOGIN',
    email,
    password,
  }
);

export default Login;
