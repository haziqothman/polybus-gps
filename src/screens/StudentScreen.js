import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
// const centerIcon = require('../assets/images/center2.jpg');
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 300,
    // width: 300,
    // flex: 1,
    justifyContent: 'flex-end',
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

const handleLogout = async () => {

}

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Bas Location',
      headerRight: (
        <Icon
          name="logout"
          size={20}
          color="black"
          style={{ paddingRight: 10 }}
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('user')
              return navigation.navigate('Home');
            } catch(e) {
              console.log('Opss', e);
            }
          }}/>
      ),
    }
  }

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
    const { latitude, longitude } = data;

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
      <Fragment>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={{ ...StyleSheet.absoluteFillObject, height: HEIGHT, width: WIDTH }}>
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
                  latitudeDelta: 0.015/2,
                  longitudeDelta: 0.0121/2,
                }}
              >
                <Marker
                  coordinate={{ latitude, longitude }}
                  title={"BAS SANWA"}
                  image={busIcon}
                />
              </MapView>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Location: HomeScreen,
  DriverInfo: SettingsScreen,
});

  }
};