import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service'
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
    private router: Router
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

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['products'])
    }
  }

}
