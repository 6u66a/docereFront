import axios from "axios";

export function fetchPost(){
  return function(dispatch) {
    dispatch({type: "FETCH_POST"});
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>{
      dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type: "FETCH_POSTS_REJECTED", payload: err})
    })
  }
}