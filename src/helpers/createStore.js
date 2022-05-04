import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../client/reducers";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  console.log("user 1", store.getState);
  return store;
};
