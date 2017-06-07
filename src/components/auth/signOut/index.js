import React from 'react';
import { View } from 'react-native';
import PropTypes from 'react-proptypes';

import RoundedButton from '../../custom/roundedButton';
import color from '../../../constants/config/colors';
import styles from './styles';

const SignOut = props => (
  <View style={styles.container}>
    <RoundedButton
      action={() => props.signOut()}
      text="Sign Out"
      bgColor={color.SAN_MARINO}
      textColor={color.WHITE}
    />
  </View>
);

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default SignOut;
