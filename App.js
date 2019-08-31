import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import * as firebase from 'firebase';

// // Config Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDb-MHYH3z8wtKf-oMqevKUAZRFQ2cg6xg",
//   authDomain: "polybus-gps.firebaseapp.com",
//   databaseURL: "https://polybus-gps.firebaseio.com",
//   projectId: "polybus-gps",
//   storageBucket: "",
//   messagingSenderId: "942603006584",
//   appId: "1:942603006584:web:0dbbdafa56c59063"
// }

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// console.log('firebase', firebase);


// firebase.database().ref('trackers').on('value', (data) => {
//   console.log('Data', data.toJSON());
// })


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