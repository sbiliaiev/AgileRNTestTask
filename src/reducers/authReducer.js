import { Map } from 'immutable';

import constant from '../constants/authConstants';

const initialState = Map({
  username: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.SET_USER_LOGGED_IN:
      return state
        .set('username', action.username);
    case constant.SET_USER_LOGGED_OUT:
      return state
        .set('username', initialState.get('username'));
    default:
      return state;
  }
}
