import { connect } from 'react-redux';

import StackOverflow from './so';
import soActions from '../../actions/soActions';

const mapStateToProps = store => ({
  list: store.so.get('list').toJS(),
  page: store.so.get('page'),
});

const mapDispatchToProps = dispatch => ({
  getQuestions: page =>
    dispatch(soActions.getQuestions(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StackOverflow);
