import {
  LOAD_FORM,
  LOAD_FORM_SUCCESS,
  SAVE_FORM,
  SAVE_FORM_SUCCESS
} from './constants';

export const loadForm = url => ({
  type: LOAD_FORM,
  url
});

export const loadFormSuccess = (url, form) => ({
  type: LOAD_FORM_SUCCESS,
  url,
  form
});

export const saveForm = (url, form, onSaveSuccess) => ({
  type: SAVE_FORM,
  url,
  form,
  onSaveSuccess
});

export const saveFormSuccess = (url, form) => ({
  type: SAVE_FORM_SUCCESS,
  url,
  form
});
