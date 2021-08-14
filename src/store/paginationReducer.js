import { HIDE_LOADER, PAGINATE } from '../utils/constants';

const initialState = {
  isLoading: false,
  currentPage: 1,
};

export function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case PAGINATE:
      return { ...state, isLoading: true, currentPage: action.payload };
    case HIDE_LOADER:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}
