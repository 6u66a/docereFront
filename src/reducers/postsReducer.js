export default function reducer(
  state={
    posts: [],
    fetching: false,
    fetched: false,
    error: null,
} , action) {
  switch (action.type) {
    case "FETCH_POST":
      state = {
        ...state, 
        fetching: true, 
        fetched: false
      };
      break;
    case "FETCH_POSTS_FULFILLED":
      state = {
        ...state, 
        fetching: false, 
        fetched: true, 
        posts :action.payload
      };
      break;
    case "FETCH_USERS_REJECTED":
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
      break;
    default:
      return state;
      break;
  }
  return state;
};