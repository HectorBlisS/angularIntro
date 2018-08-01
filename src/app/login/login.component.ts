import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {FirebaseService} from '../services/firebase.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = true
  auth = {}
  user = null

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      this.user = user
    })
  }

  login(){
    this.authService.login(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

  loginWithFacebook(){
    this.firebaseService.loginWithFacebook()
  }

  loginWithGoogle(){
    this.firebaseService.loginWithGoogle()
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['products'])
    }
  }

}
