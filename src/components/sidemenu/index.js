import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class SideMenu extends React.Component {
  data = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Stackoverflow' },
    { id: 3, name: 'Sign Out' },
  ]

  renderContent = () => (
    this.data.map(item => (
      <View
        key={item.id}
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>
          {item.name}
        </Text>
      </View>
    ))
  )

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}
