import { Actions, ActionConst } from 'react-native-router-flux';

import api from '../api';
import constant from '../constants/authConstants';
import appAction from './appActions';

const signIn = user => (dispatch) => {
  api.auth.signIn(user)
    .then((res) => {
      console.log(res);
      dispatch(appAction.changeCurrentScreen('main'));
      dispatch({
        type: constant.SET_USER_LOGGED_IN,
        username: user.username,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const signOut = () => ({
  type: constant.SET_USER_LOGGED_OUT,
});

export default {
  signIn,
  signOut,
};
