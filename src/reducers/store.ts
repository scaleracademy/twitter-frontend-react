import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import combinedReducer from "./rootReducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  combinedReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
