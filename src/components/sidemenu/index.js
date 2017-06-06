import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'react-proptypes';

import color from '../../constants/config/colors';
import styles from './styles';

export default class SideMenu extends React.Component {
  data = [
    { id: 1, key: 'main/home', name: 'Home' },
    { id: 2, key: 'main/so', name: 'Stackoverflow' },
    { id: 3, key: 'main/signOut', name: 'Sign Out' },
  ]

  handleMenuItemPress = (key) => {
    this.props.changeCurrentScreen(key, true);
    this.props.handeSidebarOpen();
  }

  renderContent = () => {
    const bgStyle = { backgroundColor: color.EBB };
    return this.data.map((item, index) => (
      <TouchableHighlight
        key={item.id}
        underlayColor="transparent"
        onPress={() => this.handleMenuItemPress(item.key)}
      >
        <View
          style={[
            styles.menuItem,
            index % 2 === 0 ? bgStyle : {},
          ]}
        >
          <Text
            style={styles.menuItemText}
          >
            {item.name}
          </Text>
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

SideMenu.propTypes = {
  changeCurrentScreen: PropTypes.func.isRequired,
  handeSidebarOpen: PropTypes.func.isRequired,
};
