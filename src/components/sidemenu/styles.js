import { StyleSheet } from 'react-native';

import { SCREEN_HEIGHT } from '../../constants/config/dimensions';
import color from '../../constants/config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.SILVER,
    paddingTop: SCREEN_HEIGHT * 0.1,
    // paddingTop: 40,
  },
  menuItem: {
    height: SCREEN_HEIGHT * 0.1,
    paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuItemText: {
    fontSize: 18,
  },
});
