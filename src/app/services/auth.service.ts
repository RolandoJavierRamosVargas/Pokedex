import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {auth} from "firebase/app";
import { User } from '../components/template/userTemplate';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {
    
  }
  getDatesUser(){
    return  this.afAuth.user;
  }

  doFacebookLogin() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  doGoogleLogin() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  doRegister(email:string,password:string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  doLoginWithEmail(email:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
