import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {NgForm, EmailValidator} from '@angular/forms';
import {User} from './../template/userTemplate';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent {

  errorMessage:string
  successMessage:string
  
  user:User ={
    name:'',
    email:'',
    password:'',
    id:''
  }

  constructor(private authService:AuthService) { }

  
  emailRegister(register:NgForm){
    let value:User=register.value;
    this.authService.doRegister(value.email,value.password).then(res=>{
      console.log(res);
    })
    
  }

}
