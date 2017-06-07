import React from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';
import PropTypes from 'react-proptypes';

import styles from './styles';

const RoundedButton = (props) => {
  const img = props.img ? <Image source={props.img} /> : null;
  const border = {};
  if (props.borderColor) {
    border.borderWidth = 2;
    border.borderColor = props.borderColor;
  }
  let propStyles = {};
  if (props.style) {
    propStyles = props.style;
  }
  return (
    <TouchableHighlight
      underlayColor="transparent"
      disabled={props.disabled}
      onPress={props.disabled ? () => {} : props.action}
    >
      <View
        style={[styles.buttonContainer, {
          backgroundColor: props.disabled ? props.bgColorDisable : props.bgColor,
          justifyContent: props.img ? 'space-between' : 'center',
        }, border, propStyles]}
      >
        {
          props.imgRight ? null : img
        }
        <Text style={[styles.buttonText, { color: props.textColor }]}>
          {props.text.toUpperCase()}
        </Text>
        {
          props.imgRight ? img : null
        }
      </View>
    </TouchableHighlight>
  );
};

RoundedButton.propTypes = {
  action: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgRight: PropTypes.bool,
  img: PropTypes.number,
  borderColor: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  bgColorDisable: PropTypes.string,
};

RoundedButton.defaultProps = {
  imgRight: false,
  img: 0,
  borderColor: '#fff',
  style: {},
  disabled: false,
  bgColorDisable: '#c0c0c0',
};

export default RoundedButton;
