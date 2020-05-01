import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokefavoritos',
  templateUrl: './pokefavoritos.component.html',
  styles: []
})
export class PokefavoritosComponent implements OnInit {
  
  pokemonesId:any[]=[];
  pokemones:any[]=[];


  constructor(private pokeApi:PokeapiService) { 
    console.log("se pasaran los favoritos");
    if(localStorage.getItem('key')){
      this.pokemonesId=JSON.parse(localStorage.getItem('key'));
      console.log(this.pokemonesId);
      this.obtenerPokemones(this.pokemonesId);
    }
    


  }


  ngOnInit() {
  }

obtenerPokemones(keys:any[]){
  let promisePokemones:any[]=[];
  keys.forEach(key=>{
    promisePokemones.push(this.pokeApi.getPokemon(key).toPromise());
    
  })
  Promise.all(promisePokemones).then(result=>{
    this.pokemones=result;
    
  });

}
eliminarPokemon(indice:string){
  let index=this.pokemonesId.indexOf(indice);
  console.log(index);
  this.pokemones.splice(index,1);
  this.pokemonesId.splice(index,1);
  this.guardarStorage();  
}

guardarStorage(){
  localStorage.setItem('key',JSON.stringify(this.pokemonesId));
}

}

