/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/components/app';
import configureStore from './src/store/configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);


AppRegistry.registerComponent('rn', () => Root);
