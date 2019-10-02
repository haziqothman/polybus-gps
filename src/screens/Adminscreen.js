import React from 'react';
import { Text, View,Image,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { ScrollView } from 'react-native';

const logo = require('../assets/images/bus-icon.png');

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/abs.jpg')} style={styles.backgroundcontainer}>
        <View style ={styles.btnContainer}>
        <TouchableOpacity
           style={styles.userBtn}
           onPress={() => this.props.navigation.navigate('Student')}
           >
             <Image 
        source = {require('../assets/images/tracker.png')}
        style={styles.imagestyle} />
        <View style={{position: 'absolute',
                            left: 200,
                            right: 0,
                            top: 0,
                            bottom: 0}}></View>
             <Text style={styles.btnTxt}>Track</Text>
           </TouchableOpacity>
            <TouchableOpacity 
                style={styles.userBtn}
                onPress={() => this.props.navigation.navigate('AssignDriver')}
            >
              <Image 
        source = {require('../assets/images/assign.png')}
        style={styles.imagestyle} />
              <Text style={styles.btnTxt}>Assign</Text>
            </TouchableOpacity>
           </View>
      </ImageBackground>
    );
  }
}



class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>Version Setting</Text>
        </View>

      <View>
      <View style={styles.container2}>
        <Image source={logo}></Image>
        <Text>VERSION 1.0.0</Text>
      </View>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
      height:null,
      width: null,
      alignItems: 'center',
      justifyContent: 'center',
    },
  imagestyle: {
    height: 70,
     width: 70,
     justifyContent: "center",
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: 'white'
    },
    btnContainer: {
      flexDirection: "column",
      justifyContent: "center",
      width: "40%",
      marginBottom: 10,
  },
     userBtn: {
       backgroundColor: "#FFD700",
       padding: 10,
       width: "95%",
       marginBottom: 10,
       borderRadius: 25,
     },
     btnTxt: {
         fontSize: 30,
          textAlign: "center"
       },
       container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#259B9B',
      },
      container2: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#09F3F3',
        height: 611,
        width: 359,
      },
      TabNavigator: {
        fontSize: 30,
        // color: '#111',
        // alignSelf: 'center'
      },
});

const TabNavigator = createBottomTabNavigator({
  Admin: HomeScreen,
  Settings: SettingsScreen,
});



export default createAppContainer(TabNavigator);