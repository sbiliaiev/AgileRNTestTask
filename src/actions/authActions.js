import api from '../api';
import constant from '../constants/authConstants';

const signIn = user => ({
  types: [
    constant.START_SIGN_IN_ACTION,
    constant.SUCCESS_SIGN_IN_ACTION,
    constant.FAIL_SIGN_IN_ACTION,
  ],
  promise: api.auth.signIn(user),
});

const signOut = () => ({
  types: [
    constant.START_SIGN_OUT_ACTION,
    constant.SUCCESS_SIGN_OUT_ACTION,
    constant.FAIL_SIGN_OUT_ACTION,
  ],
  promise: api.auth.signOut(),
});

export default {
  signIn,
  signOut,
};
