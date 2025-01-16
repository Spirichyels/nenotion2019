import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import testReducers from "./testReducers";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let reducers = combineReducers({
  test: testReducers,
});

let store = configureStore(
  { reducer: reducers },
  composeEnhancers(applyMiddleware(thunk))
);

window._store_ = store;
export default store;
