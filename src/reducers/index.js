import { combineReducers } from 'redux';

import app from './appReducer';
import auth from './authReducer';
import so from './soReducer';

export default combineReducers({
  app,
  auth,
  so,
});
