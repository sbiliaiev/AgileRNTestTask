import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'react-proptypes';

import { SCREEN_HEIGHT } from '../../../constants/config/dimensions';
import styles from './styles';

const Header = (props) => {
  const headerStyle = props.visible ? { height: SCREEN_HEIGHT * 0.1 } : { height: 0 };
  return (
    <View style={[styles.header, headerStyle]}>
      {
        props.visible && (
          <TouchableHighlight
            style={styles.headerSide}
            underlayColor="transparent"
            onPress={props.children[0].action}
          >
            <View>
              {props.children[0].img}
            </View>
          </TouchableHighlight>
        )
      }

      {
        props.visible && (
          <View style={styles.headerCenter}>
              {
                typeof props.children[1] === 'object'
                  ? (
                    <TouchableHighlight
                      underlayColor="transparent"
                      onPress={props.children[1].action}
                    >
                      <Text style={styles.headerCenterText}>
                        {props.children[1].text.toUpperCase()}
                      </Text>
                    </TouchableHighlight>
                  )
                  : <Text style={styles.headerCenterText}>{props.children[1].toUpperCase()}</Text>
              }
          </View>
        )
      }

      {
        props.children[2] && props.visible
        ? (
          <TouchableHighlight
            style={styles.headerSide}
            underlayColor="transparent"
            onPress={props.children[2].action}
          >
            <View>
              {props.children[2].img}
            </View>
          </TouchableHighlight>
          )
        : <View style={styles.headerSide} />
      }
    </View>
  );
};

Header.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        img: PropTypes.node.isRequired,
        action: PropTypes.func,
      }),
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        action: PropTypes.func,
      }),
      PropTypes.string,
    ]),
  ).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Header;
