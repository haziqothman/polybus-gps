import React from 'react';
import { Text, View,Image,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/town.jpg')} style={styles.backgroundcontainer}>
        <View style ={styles.btnContainer}>
        <TouchableOpacity
           style={styles.userBtn}
           onPress={() => this.props.navigation.navigate('Student')}
           >
             <Image 
        source = {require('../assets/images/gear.png')}
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
        source = {require('../assets/images/gear.png')}
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
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
      width: "90%",
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
       }
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);