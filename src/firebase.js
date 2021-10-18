 import firebase from "firebase/app";

import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDo6uHgojuzH0hgTWi2YleFFRuDI2P63HU",
    authDomain: "firestore-auth-1-fcc18.firebaseapp.com",
    projectId: "firestore-auth-1-fcc18",
    storageBucket: "firestore-auth-1-fcc18.appspot.com",
    messagingSenderId: "759305539471",
    appId: "1:759305539471:web:3975eb5be40a2286e045fa"
  };
  if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore()
  const auth = firebase.auth()
  const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp  //hora del servidor

  firebase.getCurrentUser = () => {//detecta al usuario y espera la promesa
     return new Promise((resolve,reject) =>{
        const unsuscribe = firebase.auth().onAuthStateChanged(user => {
         unsuscribe()
         resolve(user)
        }, reject)
     })
  }
  export {db,auth,marcaTiempo,firebase}
