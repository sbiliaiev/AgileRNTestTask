import { StyleSheet, PixelRatio } from 'react-native';

import { SCREEN_HEIGHT } from '../../../constants/config/dimensions';
import color from '../../../constants/config/colors';

export default StyleSheet.create({
  header: {
    // height: SCREEN_HEIGHT * 0.1,
    flexDirection: 'row',
    zIndex: 10,
    borderBottomWidth: 2 / PixelRatio.get(),
    borderColor: color.BLACK,
  },
  headerSide: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenterText: {
    fontSize: 16,
    letterSpacing: 2,
    color: color.DARK_GREY,
    backgroundColor: 'transparent',
    fontWeight: '600',
  },
});
