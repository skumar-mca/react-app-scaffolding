import * as type from "action-types";
const initialState = {
  formSubmitted: false
};

const sampleFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SAVE_FORM: return { ...state, formSubmitted: action.payload };

    default:
      return state;
  }
};
export default sampleFormReducer;
