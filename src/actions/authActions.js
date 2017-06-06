import { Actions, ActionConst } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

import api from '../api';
import constant from '../constants/authConstants';
import appAction from './appActions';

const signIn = user => (dispatch) => {
  dispatch({
    type: constant.CLEAR_ERROR_MESSAGE,
  });
  api.auth.signIn(user)
    .then((res) => {
      AsyncStorage.setItem('user', JSON.stringify(user));
      // dispatch(appAction.changeCurrentScreen('main'));
      dispatch({
        type: constant.SET_USER_LOGGED_IN,
        username: user.username,
      });
    })
    .catch((err) => {
      dispatch({
        type: constant.USER_LOGGED_IN_FAIL,
        message: err.message,
      });
    });
};

const checkSignInInfo = () => (dispatch) => {
  AsyncStorage.getItem('user')
    .then((user) => {
      dispatch(signIn(JSON.parse(user)));
    });
};

const signOut = () => ({
  type: constant.SET_USER_LOGGED_OUT,
});

export default {
  signIn,
  checkSignInInfo,
  signOut,
};
