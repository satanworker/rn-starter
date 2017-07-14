// @flow 

import { put, takeEvery, apply } from 'redux-saga/effects';
import httpService from '../../../services/http.service';
import { LoginPayload } from '../actions/login';
import loginSuccess from '../actions/loginSuccess';

function* fetchData(data: LoginPayload) {
  console.log(data.email, data.password);
  try {
    const res = yield apply(httpService.login, this, [data.email, data.password]);
    yield put(loginSuccess(res));
  } catch (e) {
    // yield put (loginSuccess())
  }
}

function* dataSaga(): * {
  yield takeEvery('LOGIN_REQUEST', fetchData);
}

export default dataSaga;
