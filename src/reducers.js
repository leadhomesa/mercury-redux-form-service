import {fromJS} from 'immutable';
import {handleActions} from 'redux-actions';
import {
  DOMAIN,
  LOAD_FORM_SUCCESS,
  SAVE_FORM_SUCCESS
} from './constants';

const reducer = handleActions({

  [LOAD_FORM_SUCCESS]: (state, {url, form}) =>
    state.update('entity',
      entity => entity.set(url, fromJS(form))
    ),

  [SAVE_FORM_SUCCESS]: (state, {url, form}) =>
    state.update('entity',
      entity => entity.set(url, fromJS(form))
    ),

}, fromJS({
  entity: fromJS({})
}));

export default {
  [DOMAIN]: reducer
};
