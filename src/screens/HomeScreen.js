import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,ImageBackground} from 'react-native';
export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
    return (
      <ImageBackground source={require('../assets/images/town.jpg')} style={styles.backgroundcontainer}>
        <Image
          source={require('../assets/images/icon.png')}
          style={{width: 100, height: 100}}
        >
        </Image>
        <View style={{position: 'absolute',
                            left: 10,
                            right: 0,
                            top: 12,
                            bottom: 0}}>
      <TouchableOpacity
     onPress={() => this.props.navigation.navigate('Settings')}
     >
       <Image 
       source = {require('../assets/images/gear.png')}
       style={styles.imagestyle} 
       />
     </TouchableOpacity>
     </View>
        <Text style={styles.welcome}>PolyBusGps</Text>
      <View style ={styles.btnContainer}>
        <TouchableOpacity
           style={styles.userBtn}
           onPress={() => this.props.navigation.navigate('login1')}
           >
             <Text style={styles.btnTxt}>Student</Text>
           </TouchableOpacity>
            <TouchableOpacity 
                style={styles.userBtn}
                onPress={() => this.props.navigation.navigate('login')}
            >
              <Text style={styles.btnTxt}>Admin</Text>
            </TouchableOpacity>
           </View>
           </ImageBackground>
    
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
    imagestyle: {
      height: 30,
       width: 30,
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
         }
  });