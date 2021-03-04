import firebase from 'firebase'
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDnqz8XsVoSvS_7Bsh82Z8oSmMmgYsQJt4",
  authDomain: "story-hub-7bde3.firebaseapp.com",
  projectId: "story-hub-7bde3",
  storageBucket: "story-hub-7bde3.appspot.com",
  messagingSenderId: "1081603983798",
  appId: "1:1081603983798:web:e096f08344213d0ca71917"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);