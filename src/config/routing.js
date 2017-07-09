import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/login';
import HomeNavigator from '../config/home.navigator';

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Home: {
    screen: HomeNavigator,
    navigationOptions: () => ({
      header: null,
    }),
  },
}, {

});

export default AppNavigator;

