import { connect } from 'react-redux';

import StackOverflow from './so';
import soActions from '../../actions/soActions';

const mapStateToProps = store => ({
  list: store.so.get('list').toJS(),
});

const mapDispatchToProps = dispatch => ({
  getQuestions: page =>
    dispatch(soActions.getQuestions(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StackOverflow);
