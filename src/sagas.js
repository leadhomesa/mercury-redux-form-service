import {takeLatest, put, call} from 'redux-saga/effects';
import {
  LOAD_FORM,
  getLoadFormStatusKey,
  SAVE_FORM,
  getSaveFormStatusKey
} from './constants';
import {
  loadFormSuccess,
  saveFormSuccess
} from './actions';
import {$get, $put} from '@leadhome/query';
import * as status from '@leadhome/status';

function* onLoadForm({url}) {
  const key = getLoadFormStatusKey(url);
  try {
    yield put(status.actions.fetch(key));
    const content = yield call($get, url);
    yield put(loadFormSuccess(url, content));
    yield put(status.actions.fetched(key));
  }
  catch (e) {
    yield put(status.actions.error(key, e.message));
  }
}

function* onSaveForm({url, form, onSaveSuccess}) {
  const key = getSaveFormStatusKey(url);
  try {
    yield put(status.actions.fetch(key));
    const content = yield call($put, url, form);
    yield put(saveFormSuccess(url, content));
    yield put(status.actions.fetched(key));
    if(onSaveSuccess)
      yield call(onSaveSuccess);
  }
  catch (e) {
    yield put(status.actions.error(key, e.message));
  }
}

function* all() {
  yield takeLatest(LOAD_FORM, onLoadForm);
  yield takeLatest(SAVE_FORM, onSaveForm);
}

export default [
  all
];
