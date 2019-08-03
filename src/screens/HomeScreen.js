import React, { Fragment } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

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
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const marker = {
  latlng: {
    latitude: 3.095794,
    longitude: 103.083738,
  }
}

firebase.database().ref('trackers').limitToLast(1).on('value', (data) => {
  console.log('Data', data.toJSON());
})

const HomeScreen = () => {
  return (
    <Fragment>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 3.095794, //37.78825, -122.4324
              longitude: 103.083738,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
            <Marker
              coordinate={marker.latlng}
              title={"BAS SANWA"}
              image={busIcon}
          />
          </MapView>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default HomeScreen;