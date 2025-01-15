import { combineReducers, createStore } from "redux";
import testReducers from "./testReducers";

let reducers = combineReducers({
  test: testReducers,
});

let store = createStore(reducers);

window._store_ = store;
export default store;
