import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(public db: AngularFirestore) { }


  getPokemonesPersonas(){
    return this.db.collection('items').snapshotChanges();
  }
  getPokemonPersona(key$:string){
    return this.db.collection('items/').doc(key$).snapshotChanges();
  }
  crearPokemonPersona(persona:any){
    return this.db.collection('items').add(persona);
  }
  deletePokemonPersona(id:string){
    return this.db.doc('items/'+id).delete();
  }
  
}
