import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqeX3Uugx-ojOr0iE3g9r50gDo8HYzti8",
    authDomain: "clone-17115.firebaseapp.com",
    databaseURL: "https://clone-17115.firebaseio.com",
    projectId: "clone-17115",
    storageBucket: "clone-17115.appspot.com",
    messagingSenderId: "584166458495",
    appId: "1:584166458495:web:66b3a122aa23603f62eb4a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

 