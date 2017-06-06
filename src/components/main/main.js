import React from 'react';
import { View } from 'react-native';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'react-proptypes';

import Header from '../custom/header';
import SideMenu from '../sidemenu';
import styles from './styles';

export default class Main extends React.Component {
  state = {
    open: false,
  }

  handeSidebarOpen = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  }

  render() {
    return (
      <Drawer
        ref={navigation => (this.navigation = navigation)}
        open={this.state.open}
        type="displace"
        content={
          <SideMenu
            changeCurrentScreen={this.props.changeCurrentScreen}
            handeSidebarOpen={this.handeSidebarOpen}
          />
        }
        style={styles.container}
        tapToClose
        acceptPan
        openDrawerOffset={0.3}
        panCloseMask={100}
        panOpenMask={0.10}
        tweenEasing={'easeInOutSine'}
        tweenHandler={ratio => ({ main: { opacity: (2 - ratio) / 2 } })}
      >
        <Header visible>
          {{ img: <Icon name="bars" size={25} />, action: () => this.handeSidebarOpen() }}
          {this.props.children[0].title}
        </Header>

        <View style={styles.container}>
          {
            React.createElement(
              this.props.children[0].component,
              {
                username: this.props.username,
                changeCurrentScreen: this.props.changeCurrentScreen,
              },
            )
          }
        </View>

      </Drawer>
    );
  }
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  changeCurrentScreen: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};
