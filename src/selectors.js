import {DOMAIN, getLoadFormStatusKey, getSaveFormStatusKey} from './constants';
import * as status from '@leadhome/status';
import {fromJS} from 'immutable';
import {createSelector}  from 'reselect';

export const getForm = createSelector(
  state => state[DOMAIN].get('entity'),
  (_, url) => url,
  (entity, url) => entity.get(url, fromJS({})).toJS()
);

export const getLoadFormStatus = (state, url) =>
  status.selectors.getStatus(state, getLoadFormStatusKey(url));

export const getSaveFormStatus = (state, url) =>
  status.selectors.getStatus(state, getSaveFormStatusKey(url));

