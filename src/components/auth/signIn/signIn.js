import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'react-proptypes';

import RoundedButton from '../../custom/roundedButton';
import InputField from '../../custom/inputField';
import color from '../../../constants/config/colors';
import { userIcon, lockIcon } from '../../../constants/config/icons';
import styles from './styles';

export default class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
  };

  changeStateInfo = (name, value) => {
    this.setState((state) => {
      const obj = { ...state };
      obj[name] = value;
      return obj;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>

          <View style={styles.header}>
            <Text style={styles.headerText}>
              Sign In
            </Text>
          </View>

          <View>
            <InputField
              style={{ marginBottom: 20 }}
              icon={userIcon}
              placeholder="Enter your username"
              value={this.state.username}
              onChange={text => this.changeStateInfo('username', text)}
            />
            <InputField
              icon={lockIcon}
              placeholder="Enter your password"
              secure
              value={this.state.password}
              onChange={text => this.changeStateInfo('password', text)}
            />
          </View>


          <RoundedButton
            action={() => this.props.changeCurrentScreen('signUp')}
            text="Sign In"
            bgColor={color.SAN_MARINO}
            textColor={color.WHITE}
            style={{ marginTop: 10 }}
            disabled={!this.state.username || !this.state.password}
          />

        </View>
      </View>
    );
  }
}

SignIn.propTypes = {
  changeCurrentScreen: PropTypes.func.isRequired,
};
