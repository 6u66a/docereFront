import { combineReducers } from "redux";

import tweets from "./tweetsReducer.js";
import posts from "./postsReducer.js";

export default combineReducers({
  tweets,
  posts,
})