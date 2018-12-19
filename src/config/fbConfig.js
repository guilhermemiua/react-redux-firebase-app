import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyASLlAGoF5hWJaeUmAj1OkOL74QNuDl1OU",
  authDomain: "netninja-mario-plan-f8cc4.firebaseapp.com",
  databaseURL: "https://netninja-mario-plan-f8cc4.firebaseio.com",
  projectId: "netninja-mario-plan-f8cc4",
  storageBucket: "netninja-mario-plan-f8cc4.appspot.com",
  messagingSenderId: "63994831147"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
