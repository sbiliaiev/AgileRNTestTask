import { Map } from 'immutable';

import constant from '../constants/authConstants';

const initialState = Map({
  username: '',
  errorMessage: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.SET_USER_LOGGED_IN:
      return state
        .set('username', action.username);
    case constant.SET_USER_LOGGED_OUT:
      return state
        .set('username', initialState.get('username'));
    case constant.USER_LOGGED_IN_FAIL:
      return state
        .set('errorMessage', action.message);
    case constant.CLEAR_ERROR_MESSAGE:
      return state
        .set('errorMessage', initialState.get('errorMessage'));
    default:
      return state;
  }
}
