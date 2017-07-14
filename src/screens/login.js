// @flow
import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import httpService from '../services/http.service';
import login from '../store/user/actions/login';

type Props = {
  loggedIn: boolean;
  jwt?: string;
  navigation: any;
  login: Function;
};

type DefaultProps = {
  loggedIn: boolean;
};

type State = {
  loggedIn?: boolean;
  jwt?: string;
};

class LoginScreen extends Component<DefaultProps, Props, State> {
  static navigationOptions = {
    title: 'Login',
  };
  static defaultProps = {
    loggedIn: false,
  };
  state: State = {};
  componentDidMount() {
    console.log('mount');
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
      // this.props.navigation.navigate('Home');
    }
  }
  login() {
    this.props.login('satanworker', 'bugaga');
  }
  render() {
    return (
      <View>
        <Text>Authorization goes here</Text>
        <Button
          onPress={() => this.login()}
          title={'huianne'}
        />
      </View>
    );
  }
}


const mapStateToProps = state => (
  {
    user: state.user,
  }
);

const mapDispatchToProps = dispatch => (
  {
    login: (email, password) => dispatch(login(email, password)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
