/* @flow */
import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigator from '../config/routing';


const App = (props: {
  dispatch: Function,
  nav: Function
}) => (
  <AppNavigator navigation={
    addNavigationHelpers({
      dispatch: props.dispatch,
      state: props.nav,
    })}
  />
);


const mapStateToProps = state => (
  { nav: state.nav }
);

const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;

