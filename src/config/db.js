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
  
  
  