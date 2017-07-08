// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

type Props = {
  loggedIn: boolean;
  jwt?: string;
  navigation: any;
};

type DefaultProps = {
  loggedIn: boolean;
};

type State = {
  loggedIn?: boolean;
  jwt?: string;
};

export default class LoginScreen extends Component<DefaultProps, Props, State> {
  static navigationOptions = {
    title: 'Login',
  };
  static defaultProps = {
    loggedIn: false,
  };
  // constructor(props: Props) {
  //   super(props);
  // }
  state: State = {};
  componentWillMount() {
    this.navigate();
  }
  checkUser(): boolean {
    if (this.state.loggedIn) {
      return true;
    }
    return false;
  }
  navigate() {
    if (!this.checkUser()) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }
  }
  render() {
    return (
      <Text>Authorization goes here</Text>
    );
  }
}
