import { connect } from 'react-redux';

import SignIn from './signIn';
import appAction from '../../../actions/appActions';
import authActions from '../../../actions/authActions';

const mapStateToProps = store => ({
  username: store.auth.get('username'),
  errorMessage: store.auth.get('errorMessage'),
});

const mapDispatchToProps = dispatch => ({
  changeCurrentScreen: (route, reset) =>
    dispatch(appAction.changeCurrentScreen(route, reset)),
  goBack: () =>
    dispatch(appAction.goBack()),
  signIn: user =>
    dispatch(authActions.signIn(user)),
  checkSignInInfo: () =>
    dispatch(authActions.checkSignInInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
