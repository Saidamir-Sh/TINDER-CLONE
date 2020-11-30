import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDco2pUIwHbFKWdI4y9yWDvGRQdFAP6b8s",
    authDomain: "tinder-clone-d202d.firebaseapp.com",
    databaseURL: "https://tinder-clone-d202d.firebaseio.com",
    projectId: "tinder-clone-d202d",
    storageBucket: "tinder-clone-d202d.appspot.com",
    messagingSenderId: "511862183053",
    appId: "1:511862183053:web:844b261e34e02578887ec4",
    measurementId: "G-E7TB8YPYTQ"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database