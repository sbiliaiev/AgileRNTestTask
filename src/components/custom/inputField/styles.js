import { StyleSheet, PixelRatio } from 'react-native';

import { SCREEN_WIDTH } from '../../../constants/config/dimensions';
import color from '../../../constants/config/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  inputRow: {
    height: 40,
    width: SCREEN_WIDTH * 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputField: {
    borderColor: color.BLACK,
    borderWidth: 2 / PixelRatio.get(),
    width: '85%',
    padding: 5,
  },
});
