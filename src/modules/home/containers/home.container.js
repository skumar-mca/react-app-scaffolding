import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import HomeComponent from "../components/home-component/index";
const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));
