import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  ImageBackground,
  Alert,
  Image
} from 'react-native';
import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDb-MHYH3z8wtKf-oMqevKUAZRFQ2cg6xg",
  authDomain: "polybus-gps.firebaseapp.com",
  databaseURL: "https://polybus-gps.firebaseio.com",
  projectId: "polybus-gps",
  storageBucket: "",
  messagingSenderId: "942603006584",
  appId: "1:942603006584:web:0dbbdafa56c59063"
}

if (!firebase.apps.length) {
  firebase.initializeApp({firebaseConfig});

}
let addItem = item => {
  firebase.database().ref('DriverInfo/').push({
    name: item,
    age:item,
    email:item,
  });
};

export default class AddItem extends Component {
  state = {
    name: '',
    age:'',
    email:''
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text,
      age: e.nativeEvent.text,
      email: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    Alert.alert(
      'Item saved successfully'

    )};


  render() {
    return (
      <ImageBackground source={require('../assets/images/abs.jpg')} style={styles.backgroundcontainer}>
      <Image 
        source = {require('../assets/images/assign.png')}
        style={{width: 100, height:100}}
        >
        </Image>
        <View style={{position: 'absolute',
                            left: 20,
                            right: 0,
                            top: 12,
                            bottom: 0}}>
        </View>
        <Text style={styles.title}>Assign Driver</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange}
         placeholder="Name/Bus/Date"
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backgroundcontainer: {
    flex: 1,
      height:null,
      width: null,
      alignItems: 'center',
      justifyContent: 'center',
    },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 60,
    padding: 6,
    marginRight: 7,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'black',
    backgroundColor:'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf:'stretch',
    justifyContent: 'center'
  },
  imagestyle: {
    height: 90,
     width: 90,
     justifyContent: "center",
    },
});