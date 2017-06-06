import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'react-proptypes';

import styles from './styles';

const Home = props => (
  <View style={styles.container}>
    <Text style={styles.username}>
      { `Hello, ${props.username}!` }
    </Text>
  </View>
);

Home.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Home;
