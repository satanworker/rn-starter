/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     marginBottom: 5,
//   },
// });

// export default class flowtest extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { someShit: 12 };
//   }
//   state: {
//     someShit: number,
//     newShit?: Object
//   };
//   render() {
//     const a: number = 24;
//     return (
//       <View style={styles.container}>
//         <Text>{a + 12}</Text>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js 3
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }


// tabBarOptions: {
//   labelStyle: {
//     fontSize: 12,
//   },
//   getLabel: true,
//   style: {
//     backgroundColor: Colors.BLUE,
//   },
// },
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from './src/containers/login';
import CalendarScreen from './src/containers/calendar';
import RecentScreen from './src/containers/recent';

const HomeNavigator = TabNavigator({
  Calendar: {
    screen: CalendarScreen,
  },
  Recent: { screen: RecentScreen },
},
{
  navigationOptions: {
    header: null,
  },
},
);

const rn = StackNavigator({
  Login: { screen: LoginScreen },
  Home: {
    screen: HomeNavigator,
    header: {
      visible: false,
    },
  },
});

AppRegistry.registerComponent('rn', () => rn);
