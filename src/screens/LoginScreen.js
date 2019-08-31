import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,image,ActivityIndicator } from 'react-native';

export default class LoginScreen extends Component {
    static navigationOptions = {
      title: 'LOG IN'
    }
    render() {
      return (
        
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#1E90FF" }}>
          <Text style={{ fontSize: 30,textAlign: 'center',margin: 10,}}>Admin Login</Text> 
          <TextInput
          style={styles.input}
          placeholder="Username"
          />
          <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          />
          <View style ={styles.btnContainer}>
        <TouchableOpacity
           style={styles.userBtn}
           onPress={() => this.props.navigation.navigate('Admin')}
           >
             <Text style={styles.btnTxt}>Login</Text>
           </TouchableOpacity>
            <TouchableOpacity 
                style={styles.userBtn}
                onPress={() => this.props.navigation.navigate('signup')}
            >
              <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    
  },
   userBtn: {
     backgroundColor: "#FFD700",
     padding: 15,
     width: "45%",
     borderRadius: 25,
     
   },
     btnTxt: {
       fontSize: 18,
        textAlign: "center"
     },
     input: {
       width: "90%",
       backgroundColor: "#fff",
       padding: 15,
       marginBottom: 10,
       borderRadius: 25,
     }

});