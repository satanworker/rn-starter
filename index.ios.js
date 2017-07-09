/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './src/reducers';
import AppWithNavigationState from './src/components/app';

const store = createStore(appReducer);

const Root = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);


AppRegistry.registerComponent('rn', () => Root);
