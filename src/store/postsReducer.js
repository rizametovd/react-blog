import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_SINGLE_POST } from "../utils/constants";

const initialState = {
    posts: [],
    post: {},
    isLoading: false,
  };

export function postsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_POSTS:
        return { ...state, isLoading: true };
      case FETCH_POSTS_SUCCESS:
        return { ...state, isLoading: false, posts: [...state.posts, ...action.payload] };
      case FETCH_SINGLE_POST:
        return { ...state, isLoading: false, post: action.payload };
  
      default:
        return state;
    }
  }