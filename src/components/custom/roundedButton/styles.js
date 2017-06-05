import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from '../../../constants/config/dimensions';

export default StyleSheet.create({
  buttonContainer: {
    width: SCREEN_WIDTH * 0.74,
    borderRadius: 30,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 54,
    paddingRight: 54,
  },
  buttonText: {
    letterSpacing: 2,
    fontSize: 14,
    fontWeight: '500',
  },
});
