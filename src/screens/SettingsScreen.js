import React from 'react';
import { ScrollView, View, Text, StyleSheet,Image } from 'react-native';

const logo = require('../assets/images/bus-icon.png');

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Hello Setting</Text>
          </View>

        <View>
        <View style={styles.container2}>
          <Image source={logo}></Image>
          <Text>VERSION 1.0.0</Text>
        </View>
        </View>
      </ScrollView>
      
      // <View style={styles.container2}>
      //   <Text style={styles.welcome}>VERSION 0.0.1</Text>
      //   </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#00FFFF',
    height: 611,
    width: 359,
  },
});