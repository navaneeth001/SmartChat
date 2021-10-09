// import firebase from 'firebase/app';
import '@react-native-firebase/auth';
// import  'firebase/firestore';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
// import { initializeApp } from "firebase/app";
// const firebase = require("firebase");
// import { getAnalytics } from "firebase/analytics";
firestore().useEmulator('localhost', 4000);

const firebaseConfig = {
    apiKey: "AIzaSyBOsIobY-8ff3GRp0HloxYpms9PiANlLVk",
    authDomain: "chatapp-dbc46.firebaseapp.com",
    databaseURL: "https://chatapp-dbc46-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatapp-dbc46",
    storageBucket: "chatapp-dbc46.appspot.com",
    messagingSenderId: "1087147888498",
    appId: "1:1087147888498:web:f045b66b98aad3162717eb",
    measurementId: "G-6DCCBZZTKN"
  };
let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
app = firebase.app();
}
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = app.firestore();
const auth = firebase.auth();
// db.useEmulator("localhost", 4000);
 db.collection('chats').doc('MubaeUwVTyhi6dHvhRPI').get().then((res)=>console.log('res from db is',res)).catch((err)=>{console.log('error is ',err)})
export { db,auth};