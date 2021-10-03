import React, { Component } from "react";
import "./signIn_page.css";
import firebase from 'firebase/app';
import 'firebase/auth'; 
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseConfig = {
    apiKey: "AIzaSyAs0Y3ZltG67tNQ7v0qJEug9VnzF80Ewbs",
    authDomain: "connections-web-app.firebaseapp.com",
    databaseURL: "https://connections-web-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "connections-web-app",
    storageBucket: "connections-web-app.appspot.com",
    messagingSenderId: "859319749350",
    appId: "1:859319749350:web:bc03225c39dd5710c2c927"
  };
  
firebase.initializeApp(firebaseConfig);

class SignInPage extends Component {

    state = { isUserSignedIn: false }

    uiConfig = {
        signInFlow : "popup",
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            signInSuccess:() => false
        }
    }

    componentMount = () =>{


        firebase.auth.onAuthStateChanged(user =>{
            this.setState({isUserSignedIn : !!user})
        })
    }

    render() {

        return (
            
                <div className="default_page">
                    <h1 className="App-header">Connections</h1>

                    {
                        this.state.isUserSignedIn ? (
                            <div>
                               <p> Signed In</p>
                            </div>
                        ) : (
                            <div>
                               <StyledFirebaseAuth
                               uiConfig = {this.uiConfig}
                               firebaseAuth = {firebase.auth()}
                               />
                            </div>
                        )

                    }
                    <div className="signinButton">
                        <p>SigIn</p>

                    </div>
                </div>
            
        )

    }

}

export default SignInPage ;