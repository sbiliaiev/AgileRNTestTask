import { connect } from 'react-redux';

import Home from './home';

const mapStateToProps = store => ({
  username: store.auth.get('username'),
});

export default connect(mapStateToProps)(Home);
