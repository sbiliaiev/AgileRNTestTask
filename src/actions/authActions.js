import { Actions } from 'react-native-router-flux';

import constant from '../constants/authConstants';

const signIn = ({ username }) => {
  Actions.main();
  return {
    type: constant.SET_USER_LOGGED_IN,
    username,
  };
};

const signOut = () => ({
  type: constant.SET_USER_LOGGED_OUT,
});

export default {
  signIn,
  signOut,
};
