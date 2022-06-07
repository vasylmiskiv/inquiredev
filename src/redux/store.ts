import { Dispatch } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducers/postsReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const dispatchStore = store.dispatch as
  | typeof store.dispatch
  | Dispatch<any>;

