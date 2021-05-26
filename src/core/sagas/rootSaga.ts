import { all, fork } from "redux-saga/effects";
import LoginSaga from "./loginSaga";
import RickMorty from "./rickMortySaga";

export default function* rootSaga() {
  yield all([fork(LoginSaga), fork(RickMorty)]);
}
