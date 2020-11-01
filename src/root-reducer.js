import commonReducer from "helpers/common.reducer";
import homeReducer from "modules/home/reducers/home.reducer";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { i18nReducer } from "redux-react-i18n";
const reducers = {
  i18nReducer,
  form,
  commonReducer,
  homeReducer
};

export default combineReducers(reducers);
