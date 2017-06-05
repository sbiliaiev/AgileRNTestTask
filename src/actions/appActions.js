import { Actions, ActionConst } from 'react-native-router-flux';

import appConstants from '../constants/appConstants';

const changeCurrentScreen = (route, reset) => {
  if (reset) {
    Actions[route]({ type: ActionConst.RESET });
  }
  Actions[route]();
  return {
    type: appConstants.CHANGE_CURRENT_SCREEN,
    currentScreen: route,
  };
};

const goBack = () => {
  Actions.pop();
  return {
    type: appConstants.GO_TO_PREVIOUS_SCREEN,
  };
};

export default {
  changeCurrentScreen,
  goBack,
};
