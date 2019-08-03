import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Setting: {screen: SettingsScreen},
}, {
  tabBarOptions: {
    labelStyle: {
      padding: 10,
    },
  }
});

const App = createAppContainer(MainNavigator);

export default App;