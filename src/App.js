import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AppRoutes from './app.routes.js';
import CustomLoader from 'components/loader-component/index';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        {loading && <CustomLoader />}
        <AppRoutes />
      </div>
    );
  }
}

export default App;
