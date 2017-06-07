import { StyleSheet } from 'react-native';

import color from '../../constants/config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  listItemText: {
    fontSize: 16,
  },
  highlight: {
    backgroundColor: color.SILVER,
  },
});
