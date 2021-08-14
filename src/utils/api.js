import { fetchPostsSuccessAction, fetchSinglePostAction } from '../store/actionCreators';
import { BASE_URL } from './constants';

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

function getPosts() {
  return function (dispatch) {
    return fetch(`${BASE_URL}/`, options)
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((res) => dispatch(fetchPostsSuccessAction(res)));
  };
}

function getSinglePost(id) {
  return function (dispatch) {
    return fetch(`${BASE_URL}/${id}`, options)
      .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
      .then((res) => dispatch(fetchSinglePostAction(res)));
  };
}

export { getPosts, getSinglePost };
