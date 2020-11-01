import * as types from '../../../action-types';

const saveFormData = (postData, cb, dispatch) => {
  alert('Form Submitted. This message is raised from redux action')
  dispatch({ type: types.SAVE_FORM, payload: true })
  cb && cb();
}

export default {
  saveFormData
};
