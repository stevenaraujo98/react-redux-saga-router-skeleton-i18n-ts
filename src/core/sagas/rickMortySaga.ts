import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchRickMorty } from "../services/rickMortyServices";
import * as actionCreators from "../actionCreators/rickMortyActionCreators";
import * as actionTypes from "../actionTypes/rickMortyActionTypes";

function* onLoadCharacter({ id }: actionTypes.GetRickMortyAction) {
  try {
    yield put(actionCreators.getRickMortyRequest());
    const { data } = yield call(fetchRickMorty, id);
    yield put(actionCreators.getRickMortySuccess(data));
  } catch (error) {
    yield put(actionCreators.getRickMortyFailure(error.response.data.error));
  }
}

function* watchOnLoadLogin() {
  yield takeEvery(actionTypes.GET_RICKMORTY, onLoadCharacter);
}

export default function* loginSaga() {
  yield all([fork(watchOnLoadLogin)]);
}
