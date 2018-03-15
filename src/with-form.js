import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadForm, saveForm} from './actions';
import {getForm, getLoadFormStatus, getSaveFormStatus} from './selectors';

class WithForm extends React.PureComponent {
  static defaultProps = {
    onSaveSuccess: () => null
    disableInitialLoad: false
  };

  componentDidMount() {
    const {url, loadForm, disableInitialLoad} = this.props;

    if (!disableInitialLoad)
      loadForm(url);
  }

  onSave = form => {
    const {saveForm, url, onSaveSuccess} = this.props;
    saveForm(url, form, onSaveSuccess);
  };

  render() {
    const {render, children, form, loadStatus, saveStatus} = this.props;

    return (render || children)({
      form,
      loadStatus,
      saveStatus,
      onSave: this.onSave
    });
  }
}

const ConnectedWithForm = connect(
  (state, {url}) => ({
    form: getForm(state, url),
    loadStatus: getLoadFormStatus(state, url),
    saveStatus: getSaveFormStatus(state, url)
  }),
  {
    saveForm,
    loadForm
  }
)(WithForm);

ConnectedWithForm.propTypes = {
  url: PropTypes.string.isRequired,
  onSaveSuccess: PropTypes.func
};

export default ConnectedWithForm;
