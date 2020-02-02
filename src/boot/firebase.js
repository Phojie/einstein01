import * as firebase from 'firebase/app'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC8s7zuixc3vvJX_8ZvhfjlY50Yiozo1hE',
  authDomain: 'einstein00-cf6cc.firebaseapp.com',
  databaseURL: 'https://einstein00-cf6cc.firebaseio.com',
  projectId: 'einstein00-cf6cc',
  storageBucket: 'einstein00-cf6cc.appspot.com',
  messagingSenderId: '680661225891',
  appId: '1:680661225891:web:8edfb6f2b500a984a08a16'
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
// let firebaseAuth = firebaseApp.auth()
let fireDB = firebaseApp.firestore()
let rdb = firebaseApp.database()
let fireStorage = firebaseApp.storage()
let fireAuth = firebaseApp.auth()

export { fireDB, rdb, fireStorage, fireAuth, firebase }
