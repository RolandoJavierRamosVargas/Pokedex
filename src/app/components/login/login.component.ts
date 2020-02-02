import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../template/userTemplate';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent  {

  user:User = {
    email:'',
    password:''
  }

  constructor(private authService:AuthService,private router:Router) {
   }

  login(name:string){
    console.log(name);
    if (name=='google') {
      this.authService.doGoogleLogin();
    }else if(name=='facebook'){
        this.authService.doFacebookLogin();
    }else{
      this.authService.doLoginWithEmail(this.user.email,this.user.password).then(user=>{
        if(user.user.uid){
          this.router.navigate(["home"]);
        }
        
      });
    }
  }
  }



