import React from 'react';
import { Provider } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';

import store from './store';

import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';

const scenes = Actions.create(
  <Scene key='root' hideNavBar>
    <Scene
      key='signIn'
      component={SignIn}
      title='Sign In'
    />
    <Scene
      key='signUp'
      component={SignUp}
      title='Sign Up'
    />
  </Scene>
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
