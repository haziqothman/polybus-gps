import React, { Component, Fragment, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import HomeScreen from './src/screens/HomeScreen';
// import StudentScreen from './src/screens/StudentScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import LoginStudentScreen from './src/screens/LoginStudentScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
import * as firebase from 'firebase';

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDb-MHYH3z8wtKf-oMqevKUAZRFQ2cg6xg",
  authDomain: "polybus-gps.firebaseapp.com",
  databaseURL: "https://polybus-gps.firebaseio.com",
  projectId: "polybus-gps",
  storageBucket: "",
  messagingSenderId: "942603006584",
  appId: "1:942603006584:web:0dbbdafa56c59063"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const busIcon = require('../assets/images/bus-icon.png');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 800,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    }
  }

  componentDidMount() {
    firebase.database().ref().child('trackers').limitToLast(1).on('value', (response) => {
      if (response) {
        let words = response.val();
        let newValue = {};

        for (let word in words) {
          newValue = Object.assign({
            id: words[word].device_id,
            latitude: words[word].latitude,
            longitude: words[word].longitude,
          })
        }

        this.setState({
          data: newValue,
          loading: false,
        })
      }
    })
  }

  render() {
    const { data, loading } = this.state;
    console.log('Data', data);
    if (loading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    } else {
      const { latitude, longitude } = data;
      return (
        <Fragment>
          <SafeAreaView>
            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: latitude, // 3.095794,
                  longitude: longitude, // 103.083738,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              >
                <Marker
                  coordinate={{ latitude, longitude }}
                  title={"BAS SANWA"}
                  image={busIcon}
                />
              </MapView>
            </View>
          </SafeAreaView>
        </Fragment>
      );
    }

  }
}



// const HomeScreen = () => {
//   const [data, setData] = useState({});

//   // let data = {};

  
//   const { latitude, longitude } = data;
//   const marker = {
//     latlng: {
//       latitude: latitude ? latitude : 3.095794,
//       longitude: longitude ? longitude : 103.083738,
//     }
//   }
//   console.log('Data1', data);


// };

// export default HomeScreen;