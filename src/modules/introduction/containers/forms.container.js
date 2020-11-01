import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import FolderSubmitActions from "../actions/form-submit-actions";
import FormsDemoComponent from "../components/forms-component/index";
const mapStateToProps = state => {
  return {
    formValuesFromRedux: state.form.formsDemoForm
  };
};

const mapDispatchToProps = dispatch => ({
  saveFormData: (postData, cb) => {
    FolderSubmitActions.saveFormData(postData, cb, dispatch)
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormsDemoComponent));
