import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'react-proptypes';

import RoundedButton from '../../custom/roundedButton';
import color from '../../../constants/config/colors';
import styles from './styles';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Sign Up
        </Text>
        <RoundedButton
          action={() => this.props.goBack()}
          text="Back to Sign In Screen"
          bgColor={color.SAN_MARINO}
          textColor={color.WHITE}
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}

SignUp.propTypes = {
  goBack: PropTypes.func.isRequired,
  // changeCurrentScreen: PropTypes.func.isRequired,
};
