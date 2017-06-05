import { StyleSheet } from 'react-native';

import color from '../../../constants/config/colors';
import { SCREEN_HEIGHT } from '../../../constants/config/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
  },
  loginForm: {
    height: SCREEN_HEIGHT * 0.7,
    justifyContent: 'space-around',
  },
  button: {

  },
});
