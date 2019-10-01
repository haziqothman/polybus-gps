import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import ItemComponent from '../components/ItemComponent';

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
  

let itemsRef = firebase.database().ref('DriverInfo/');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    }
  })

export default class ListItem extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items});
         });
    }
    
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
        )
    }
}