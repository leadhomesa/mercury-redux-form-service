export const DOMAIN = '@@FORM';

export const LOAD_FORM = `${DOMAIN}/load-form`;
export const LOAD_FORM_SUCCESS = `${DOMAIN}/load-form-success`;
export const getLoadFormStatusKey = url => `${DOMAIN}/load-form/${url}`;

export const SAVE_FORM = `${DOMAIN}/save-form`;
export const SAVE_FORM_SUCCESS = `${DOMAIN}/save-form-success`;
export const getSaveFormStatusKey = url => `${DOMAIN}/save-form/${url}`;
