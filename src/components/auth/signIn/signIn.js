import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'react-proptypes';

import RoundedButton from '../../custom/roundedButton';
import color from '../../../constants/config/colors';
import styles from './styles';

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Sign In
        </Text>
        <RoundedButton
          action={() => this.props.changeCurrentScreen('signUp')}
          text="Go to Sign Up Screen"
          bgColor={color.SAN_MARINO}
          textColor={color.WHITE}
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}

SignIn.propTypes = {
  changeCurrentScreen: PropTypes.func.isRequired,
};
