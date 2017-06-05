import { connect } from 'react-redux';

import SignUp from './signUp';
import appAction from '../../../actions/appActions';

const mapStateToProps = store => ({
  
});

const mapDispatchToProps = dispatch => ({
  changeCurrentScreen: (route, reset) =>
    dispatch(appAction.changeCurrentScreen(route, reset)),
  goBack: () =>
    dispatch(appAction.goBack()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
