import React from 'react';
import { Provider } from 'react-redux';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import store from './store';

import SignIn from './components/auth/signIn';
import Main from './components/main';

import Home from './components/home';
import StackOverflow from './components/so';
import SignOut from './components/auth/signOut';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene
      key="signIn"
      component={SignIn}
      title="Sign In"
      initial
    />
    <Scene
      key="main"
      component={Main}
      title="Main Screen"
      type={ActionConst.RESET}
    >

      <Scene
        key="main/home"
        component={Home}
        title="Home Screen"
        initial
      />
      <Scene
        key="main/so"
        component={StackOverflow}
        title="Stack Overflow"
      />
      <Scene
        key="main/signOut"
        component={SignOut}
        title="Sign Out"
      />

    </Scene>
  </Scene>,
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}
