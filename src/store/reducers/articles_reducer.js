// import { ALL_ARTICLES } from "../../types";
const INITIAL_STATE = {
  user: null,
  isAuth: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ALL_ARTICLES':
      return {...state, post: action.payload}
    default:
      return state;
  }
}
