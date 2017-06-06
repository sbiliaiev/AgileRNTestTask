import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Home = props => (
  <View style={styles.container}>
    <Text>HOME SCREEN</Text>
    <Text>{props.username}</Text>
  </View>
);

export default Home;
