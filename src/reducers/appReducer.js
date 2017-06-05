import { Map } from 'immutable';

import constant from '../constants/appConstants';

const initialState = Map({
  currentScreen: 'signIn',
  previousScreen: 'signIn',
});

export default function (state = initialState, action) {
  const tmpCurrentScreen = state.get('currentScreen');
  switch (action.type) {
    case constant.CHANGE_CURRENT_SCREEN:
      return state
        .set('previousScreen', state.get('currentScreen'))
        .set('currentScreen', action.currentScreen);
    case constant.GO_TO_PREVIOUS_SCREEN:
      return state
        .set('currentScreen', state.get('previousScreen'))
        .set('previousScreen', tmpCurrentScreen);
    default:
      return state;
  }
}
