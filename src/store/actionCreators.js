import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_SINGLE_POST, HIDE_LOADER, PAGINATE } from "../utils/constants";

export function fetchPostsAction() {
    return {
      type: FETCH_POSTS,
    };
  }
  
  export function fetchPostsSuccessAction(payload) {
    return {
      type: FETCH_POSTS_SUCCESS,
      payload,
    };
  }
  
  export function fetchSinglePostAction(payload) {
    return {
      type: FETCH_SINGLE_POST,
      payload,
    };
  }
  
  export function paginationAction(payload) {
    return {
      type: PAGINATE,
      payload,
    }
  }

  export function showLoaderAction(payload) {
    return {
      type: HIDE_LOADER,
      payload,
    }
  }