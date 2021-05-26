import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchLogin } from "../services/loginServices";
import * as actionCreators from "../actionCreators/loginActionCreators";
import * as actionTypes from "../actionTypes/loginActionTypes";
const { REACT_APP_USER_TOKEN } = process.env;
let keyStorage: string = REACT_APP_USER_TOKEN || '';

function* onLoadLogin({ user, password }: actionTypes.GetLoginAction) {
  try {
    yield put(actionCreators.getLoginRequest());
    const { data } = yield call(fetchLogin, user, password);
    localStorage.setItem(keyStorage, JSON.stringify(data));
    yield put(actionCreators.getLoginSuccess(data));
  } catch (error) {
    yield put(actionCreators.getLoginFailure(error.response.data.error));
  }
}

function* watchOnLoadLogin() {
  yield takeEvery(actionTypes.GET_LOGIN, onLoadLogin);
}

export default function* loginSaga() {
  yield all([fork(watchOnLoadLogin)]);
}
