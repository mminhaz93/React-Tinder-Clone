import firebase from "firebase"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "tinder-clone-b9ed2.firebaseapp.com",
    databaseURL: "https://tinder-clone-b9ed2.firebaseio.com",
    projectId: "tinder-clone-b9ed2",
    storageBucket: "tinder-clone-b9ed2.appspot.com",
    messagingSenderId: "585589120733",
    appId: "1:585589120733:web:78f4724357ed0627650534",
    measurementId: "G-HV0Y18SCY6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;