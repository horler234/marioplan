import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDCJ4aCW3Tq-5anSsKL92qtsypmPg9cX-k",
    authDomain: "netninja-marioplan-50992.firebaseapp.com",
    databaseURL: "https://netninja-marioplan-50992.firebaseio.com",
    projectId: "netninja-marioplan-50992",
    storageBucket: "netninja-marioplan-50992.appspot.com",
    messagingSenderId: "880815326471"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});

  export default firebase;