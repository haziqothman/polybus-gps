import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import { getActiveChildNavigationOptions } from 'react-navigation';

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
      title: 'Log In'
    }

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        Password: '',
        loading: false,
      };
    }

    componentDidMount () {
      return this.getLogin();
    }

    componentWillUnmount () {
      return this.setState({ loading: false });
    }

    getLogin = async () => {
      this.setState({ loading: true });
      const user = await this.getUser();

      console.log('GET USER:', user);

      if (user) {
        // this.setState({ loading: false });
        return this.props.navigation.navigate('Student');
      }
      
      return this.setState({ loading: false });
    }
    
    storeUser = async (email) => {
      try {
        return AsyncStorage.setItem('user', email);
      } catch (e) {
        // saving error
        this.setState({ error: 'storing user failed'});
      }
    }

    getUser = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        console.log('Valuee dalam getUser:', value);
        return value;
      } catch(e) {
        this.setState({ error: 'getting user failed'});
        return null;
      }
    }

    OnLoginPress() { 
      this.setState({ error: '', loading: true });
      
      const{ email, Password } = this.state;
      firebase.auth().signInWithEmailAndPassword(email, Password)
        .then(async (response) => {
          const { operationType } = response;
          if (operationType === 'signIn') {
            await this.storeUser(email);
            const User = await this.getUser();
            console.log('Stored user:', User);
            this.props.navigation.navigate('Student');
          }
        })
        .catch((error) =>{
          console.log(error);
          if (error.code === 'auth/user-not-found') {
            return this.setState({ error: 'This email not found', loading: false });
          }

          if (error.code === 'auth/wrong-password') {
            return this.setState({ error: 'Invalid password', loading: false });
          }
          
          return this.setState({ error: 'Authentication failed', loading: false });
        })
    }
      

    // renderButtonOrLoading() {
    //     return (
    //     <View style ={styles.btnContainer}>
    //       <TouchableOpacity
    //         style={styles.userBtn}
    //         onPress={this.OnLoginPress.bind(this)}
    //       >
    //         <Text style={styles.btnTxt}>Login</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity 
    //         style={styles.userBtn}
    //         onPress={() => this.props.navigation.navigate('SignUp')}
    //       >
    //         <Text style={styles.btnTxt}>Sign Up</Text>
    //       </TouchableOpacity>
    //     </View>
    //     );
    // }

    render() {
      const { loading } = this.state;

      if (loading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }

      return (

        <ImageBackground source={require('../assets/images/abs.jpg')} style={styles.backgroundcontainer}>
          <Image 
            source = {require('../assets/images/student.png')}
            style={{width: 100, height:100}}
          >
          </Image>
          <View style={{position: 'absolute',
                            left: 20,
                            right: 0,
                            top: 12,
                            bottom: 0}}>
          </View>
          <Text style={{ fontSize: 30,textAlign: 'center',margin: 10,}}>Student Login</Text> 
          <TextInput
            style={styles.input}
            value={this.state.email}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.input}
            value={this.state.Password}
            placeholder="Password"
            secureTextEntry
            onChangeText={Password => this.setState({ Password })}
          />
          <Text>{this.state.error}</Text>
          <View style ={styles.btnContainer}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={this.OnLoginPress.bind(this)}
            >
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.userBtn}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <Text style={styles.btnTxt}>Sign Up</Text>
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