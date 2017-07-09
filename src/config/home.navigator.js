import { TabNavigator } from 'react-navigation';
import Calendar from '../screens/calendar';
import Recent from '../screens/recent';

const HomeNavigator = TabNavigator({
  Calendar: { screen: Calendar },
  Recent: { screen: Recent },
}, {
  tabBarPosition: 'bottom',
  header: {
    visible: false,
  },
});

export default HomeNavigator;
