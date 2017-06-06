import { StyleSheet, PixelRatio } from 'react-native';

import color from '../../constants/config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.SILVER,
    paddingTop: 40,
  },
  menuItem: {
    height: 50,
    paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 2 / PixelRatio.get(),
    borderColor: color.BLACK,
  },
  menuItemText: {
    fontSize: 18,
  },
});
