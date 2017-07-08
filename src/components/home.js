// @flow

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  navigation: any;
};

type DefaultProps = {

};

type State = {
  test: number
};

export default class HomeScreen extends Component<DefaultProps, Props, State> {
  static navigationOptions = {
    title: 'Welcome',
  };
  static defaultProps = {};
  constructor(props: Props) {
    super(props);
    console.log(this.state.test);
  }
  state = { test: 1 };
  // setSomeState(data: number) {}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home goes here</Text>
        <Button
          onPress={() => navigate('Login')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
