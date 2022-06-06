import { combineReducers } from "redux";
import postsReducer from './postsReducer';

const reducers = combineReducers({
  posts: postsReducer
})

export default reducers;