import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,ImageBackground,Image } from 'react-native';
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

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'LOG IN'
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      Password: '',
      loading: false,
      error: '',
    };
  }

  OnLoginPress() { 
    const{ email, Password } = this.state;
    this.setState({ loading:true });

    firebase.auth().signInWithEmailAndPassword(email, Password)
    .then((response) => {
      console.log('Response Here:', response);
        this.setState({error:'',});
        this.props.navigation.navigate('Admin');
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
        onPress={this.OnLoginPress.bind(this)}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.userBtn}
          onPress={() => this.props.navigation.navigate('SignUp1')}
        >
          <Text style={styles.btnTxt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  render() {
    return (

      <ImageBackground source={require('../assets/images/abs.jpg')} style={styles.backgroundcontainer}>
        <Image 
                source = {require('../assets/images/admin.png')}
                 style={{width: 100, height:100}}
                >
          </Image>
          <View style={{position: 'absolute',
                            left: 20,
                            right: 0,
                            top: 12,
                            bottom: 0}}>
          </View>
        <Text style={{ fontSize: 30,textAlign: 'center',margin: 10,}}>Admin Login</Text> 
        <TextInput
        style={styles.input}
        value={this.state.email}
        placeholder="Email"
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