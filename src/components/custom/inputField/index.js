import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'react-proptypes';

import styles from './styles';

const InputField = props => (
  <View style={[styles.container, props.style]}>
    <View style={styles.inputRow}>
      {props.icon}
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        style={styles.inputField}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        value={props.value}
        onChangeText={text => props.onChange(text)}
      />
    </View>
  </View>
);

InputField.propTypes = {
  icon: PropTypes.node,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  secure: PropTypes.bool,
};

InputField.defaultProps = {
  icon: null,
  style: {},
  secure: false,
};

export default InputField;
