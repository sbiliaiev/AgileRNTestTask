import { connect } from 'react-redux';

import Main from './main';
import appAction from '../../actions/appActions';
import authAction from '../../actions/authActions';

const mapStateToProps = store => ({
  username: store.auth.get('username'),
});

const mapDispatchToProps = dispatch => ({
  changeCurrentScreen: (route, reset) =>
    dispatch(appAction.changeCurrentScreen(route, reset)),
  signOut: () =>
    dispatch(authAction.signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
