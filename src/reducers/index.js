import { combineReducers } from "redux";

const initialState = {
  lang: "en",
  showModal: false,
  showVideo: false
};

const appReducer = function(state = initialState, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, lang: action.payload };
    case "SHOW_MODAL":
      return { ...state, showModal: action.payload };
    case "SHOW_VIDEO":
      return { ...state, showVideo: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer
});
