import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from "react-navigation";

import * as ReactNavigation from 'react-navigation'

import Routes from './src/config/routes'

import getStore from "./src/config/store";

const AppNavigator = StackNavigator(Routes);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

@connect(state => ({
  nav: state.nav
}))

class AppWithNavigationState extends Component {
  render() {
      return (
          <AppNavigator
              navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
              })}
          />
      );
  }
}

const store = getStore(navReducer);

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}