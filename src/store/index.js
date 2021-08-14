import thunk from 'redux-thunk';
import { postsReducer } from './postsReducer.js';
import { paginationReducer } from './paginationReducer.js';

const { createStore, applyMiddleware, combineReducers } = require('redux');
const rootReducer = combineReducers({
  posts: postsReducer,
  pagination: paginationReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
