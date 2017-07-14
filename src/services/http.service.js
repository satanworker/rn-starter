// @flow
import type { UserRes } from '../store/user/user.interface';

class HttpService {
  url: string = 'http://calani-dev.northeurope.cloudapp.azure.com';
  headers: Object = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  login(email: string, password: string): Promise<UserRes> {
    console.log(email, password, 'hui');
    return fetch(`${this.url}/api/authorization`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then(response => response.json());
  }
}

export default new HttpService();

