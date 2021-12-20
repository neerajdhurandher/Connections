import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAs0Y3ZltG67tNQ7v0qJEug9VnzF80Ewbs",
  authDomain: "connections-web-app.firebaseapp.com",
  databaseURL: "https://connections-web-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "connections-web-app",
  storageBucket: "connections-web-app.appspot.com",
  messagingSenderId: "859319749350",
  appId: "1:859319749350:web:bc03225c39dd5710c2c927"
}).auth()
