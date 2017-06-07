import { Map } from 'immutable';

import constant from '../constants/authConstants';

const initialState = Map({
  username: '',
  status: '',
  errorMessage: '',
});

export default function (state = initialState, action) {
  switch (action.type) {
    case constant.START_SIGN_IN_ACTION:
    console.log('start', action);
      return state
        .set('status', 'loading');
    case constant.SUCCESS_SIGN_IN_ACTION:
    console.log('success', action);
      return state
        .set('status', 'success')
        .set('username', action.result.username);
    case constant.FAIL_SIGN_IN_ACTION:
    console.log('error', action);
      return state
        .set('status', 'fail')
        .set('errormessage', action.message);
    default:
      return state;

    // case constant.SET_USER_LOGGED_IN:
    //   return state
    //     .set('username', action.username);
    // case constant.SET_USER_LOGGED_OUT:
    //   return state
    //     .set('username', initialState.get('username'));
    // case constant.USER_LOGGED_IN_FAIL:
    //   return state
    //     .set('errorMessage', action.message);
    // case constant.CLEAR_ERROR_MESSAGE:
    //   return state
    //     .set('errorMessage', initialState.get('errorMessage'));
    // default:
    //   return state;
  }
}
