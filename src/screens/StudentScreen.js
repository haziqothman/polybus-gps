import React, { Component, Fragment, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator, Dimensions, Image,ImageBackground } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {CurrentLocationButton} from '../components/CurrentLocationButton'

// import HomeScreen from './src/screens/HomeScreen';
// import StudentScreen from './src/screens/StudentScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import LoginStudentScreen from './src/screens/LoginStudentScreen';
// import SettingsScreen from './src/screens/SettingsScreen';
// import { CurrentLocationButton  from './CurrentLocationButton';
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
const centerIcon = require('../assets/images/center2.jpg');
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 800,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container2 : {
    zIndex: 9,
    position: 'absolute',
    width: 85,
    height: 85,
    backgroundColor: '#fff',
    left: WIDTH-70,
    borderRadius: 50,
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'space-around',
    alignItems: 'center',
},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundcontainer: {
    flex: 1,
      height:null,
      width: null,
      alignItems: 'center',
      justifyContent: 'center',
    },
userBtn: {
  backgroundColor: "#FFD700",
  padding: 15,
  width: "95%",
  marginBottom: 10,
  borderRadius: 25,
},

  btnTxt: {
    fontSize: 30,
     textAlign: "center"
},
btnContainer: {
  flexDirection: "column",
  justifyContent: "center",
  width: "40%",
  marginBottom: 10,
},
imagestyle: {
  height: 70,
   width: 70,
   justifyContent: "center",
  },
});

class HomeScreen extends Component {
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

  centerMap() {
    const { 
      latitude, 
      longitude, 
      latitudeDelta, 
      longitudeDelta,
    } = this.state.data;

    this.map.animatetoRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    })
  }

  render() {
    const { data, loading } = this.state;
    // const cb = props.cb ? props.cb :() => console.log('Callback function not passed to CurretLocationButton!');
    const bottom = 65;
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
              <CurrentLocationButton/>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                showsUserLocation={true}
                showsCompass={true}
                rotateEnabled={false}
                // ref-{(map) -> {this.map = map}}
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
class SettingsScreen extends React.Component {
   render() {
    return (
      <ImageBackground source={require('../assets/images/abs.jpg')} style={styles.backgroundcontainer}>
        <View style ={styles.btnContainer}>
        <TouchableOpacity
           style={styles.userBtn}
           onPress={() => this.props.navigation.navigate('ListItem')}
           >
             <Image 
        source = {require('../assets/images/taxi-driver.png')}
        style={styles.imagestyle} />
             <Text style={styles.btnTxt}>Driver Info</Text>
           </TouchableOpacity>
           </View>
           </ImageBackground>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);


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