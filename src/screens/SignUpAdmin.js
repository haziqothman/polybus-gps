import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,ImageBackground } from 'react-native';
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


export default class SignUpScreen extends Component {
  
    static navigationOptions = {
      title: 'SignUp'
    }
    constructor(props) {
      super(props);
      this.state = {email:'',Password:'',loading:false};
    } 
     
      OnSignUpPress() { 
        this.setState({error:'',loading:true});
        const{email, Password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,Password)
        .then(() => {
          this.setState({error:'',});
          this.props.navigation.navigate('login');
        })
        .catch(() =>{
          this.setState({error:'Authentication Failed',loading:false});
        })
       }

       renderButtonOrLoading() {
         
         return (
         <View style ={styles.btnContainer}>
        <TouchableOpacity
           style={styles.userBtn}
           onPress={this.OnSignUpPress.bind(this)}
           >
             <Text style={styles.btnTxt}>SignUp</Text>
           </TouchableOpacity>
          </View>
         )
        }
    render() {
      return (

        <ImageBackground source={require('../assets/images/town2.jpg')} style={styles.backgroundcontainer}>
          <Text style={{ fontSize: 30,textAlign: 'center',margin: 10,}}>SIGN UP</Text> 
          <TextInput
          style={styles.input}
          value={this.state.email}
          placeholder="Username"
          onChangeText={email => this.setState({email})}
          />
          <TextInput
          style={styles.input}
          value={this.state.Password}
          placeholder="Password"
          secureTextEntry
          onChangeText={Password => this.setState({Password})}
          />
          <Text>{this.state.error}</Text>
          {this.renderButtonOrLoading()}
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
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    justifyContent: "center",
    
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