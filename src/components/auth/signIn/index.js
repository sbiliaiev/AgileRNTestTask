import { connect } from 'react-redux';

import SignIn from './signIn';
import appAction from '../../../actions/appActions';
import authActions from '../../../actions/authActions';

const mapStateToProps = store => ({
  username: store.auth.get('username'),
});

const mapDispatchToProps = dispatch => ({
  changeCurrentScreen: (route, reset) =>
    dispatch(appAction.changeCurrentScreen(route, reset)),
  goBack: () =>
    dispatch(appAction.goBack()),
  signIn: user =>
    dispatch(authActions.signIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
