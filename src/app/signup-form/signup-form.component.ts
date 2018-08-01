import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  username = ""
  correo = ""
  password = ""
  password2 = ""

  recibiendoElForm(form){
    console.log(form.value)
  }



  ngOnInit() {
  }

}
