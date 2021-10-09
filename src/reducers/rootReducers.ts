import { combineReducers } from "redux";

import userDetailReducers from "./userDetailReducers";

const combinedReducer = combineReducers({
  userDetails: userDetailReducers,
});

export default combinedReducer;
