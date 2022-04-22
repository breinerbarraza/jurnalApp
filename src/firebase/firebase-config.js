import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCanttiqjNX4-ivlxg1kS73ZAkDdLmorvQ",
    authDomain: "react-app-cursos-1e6d4.firebaseapp.com",
    projectId: "react-app-cursos-1e6d4",
    storageBucket: "react-app-cursos-1e6d4.appspot.com",
    messagingSenderId: "682248236970",
    appId: "1:682248236970:web:1afaf7d5c006b1057f85d3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }