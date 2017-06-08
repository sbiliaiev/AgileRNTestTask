import { AsyncStorage } from 'react-native';

import api from '../api';
import constant from '../constants/authConstants';
import appAction from './appActions';

// const signIn = user => (dispatch) => {
//   dispatch({
//     type: constant.CLEAR_ERROR_MESSAGE,
//   });
//   api.auth.signIn(user)
//     .then((res) => {
//       AsyncStorage.setItem('user', JSON.stringify(user));
//       // dispatch(appAction.changeCurrentScreen('main'));
//       dispatch({
//         type: constant.SET_USER_LOGGED_IN,
//         username: user.username,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: constant.USER_LOGGED_IN_FAIL,
//         message: err.message,
//       });
//     });
// };

const signIn = (user) => {
  console.log(user);
  return {
    types: [
      constant.START_SIGN_IN_ACTION,
      constant.SUCCESS_SIGN_IN_ACTION,
      constant.FAIL_SIGN_IN_ACTION,
    ],
    promise: api.auth.signIn(user),
  };
};

const signOut = () => ({
  types: [
    constant.START_SIGN_OUT_ACTION,
    constant.SUCCESS_SIGN_OUT_ACTION,
    constant.FAIL_SIGN_OUT_ACTION,
  ],
  promise: api.auth.signOut(),
});

const checkSignInInfo = () => (dispatch) => {
  AsyncStorage.getItem('user')
    .then((user) => {
      if (user) {
        dispatch(signIn(JSON.parse(user)));
      }
    });
};

// const signOut = () => {
//   AsyncStorage.removeItem('user');
//   return {
//     type: constant.SET_USER_LOGGED_OUT,
//   };
// };

export default {
  signIn,
  checkSignInInfo,
  signOut,
};
