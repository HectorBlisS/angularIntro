import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDyc9dlnm8cieAPTFq0e0ywpNV_wCkf4nA",
  authDomain: "modulo3-ce714.firebaseapp.com",
  databaseURL: "https://modulo3-ce714.firebaseio.com",
  projectId: "modulo3-ce714",
  storageBucket: "modulo3-ce714.appspot.com",
  messagingSenderId: "572828853377"
};
firebase.initializeApp(config);
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  url = 'http://localhost:3000/'
  constructor() { }
  provider = new firebase.auth.FacebookAuthProvider()
  googleProvider = new firebase.auth.GoogleAuthProvider()

  loginWithFacebook(){
    firebase.auth().signInWithPopup(this.provider)
    .then(snap=>{
      //console.log(snap.credential.accessToken)
      localStorage.setItem('facebookToken', JSON.stringify(snap.credential.accessToken) )
      localStorage.setItem('user', JSON.stringify(snap.user))
      this._sendTokenToBackend(snap)
    })
  }

  loginWithGoogle(){
    firebase.auth().signInWithPopup(this.googleProvider)
    .then(snap=>{
      console.log(snap.user)
    })
  }

  _sendTokenToBackend(snap){
    const token = snap.credential.accessToken
    fetch(this.url + 'facebook/login', {
      method:'post',
      headers:{
        'Authorization': `Bearer ${token}`
      }
    }) 
    .then(r=>{
      if(!r.ok) throw new Error()
      return r.json()
    })
    .then(res=>{
      console.log(res)
    }) 
  }


}
