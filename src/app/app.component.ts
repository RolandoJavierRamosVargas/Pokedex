import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';

  user ={
    id:''
  }

  constructor(public authService:AuthService){
    this.authService.getDatesUser().subscribe(user=>{
      if(!user) return;
      console.log(user);
      this.user.id=user.uid;
    })
  }
  logOut(){
      this.authService.logout();
  }
}
