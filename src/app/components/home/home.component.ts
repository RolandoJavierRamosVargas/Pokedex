import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { FormsModule } from '@angular/forms';
import { Observable , forkJoin } from 'rxjs';
import { Pokemon } from '../modelo/Pokemon';
import { promise } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nombreDeBusqueda:string="";
  pokemones:any ;
  results:any[]=[];
  urlsPokemones:any[]=[];
  urlSiguiente:string [] =[];
  peticionesGetPokemon:any[]=[];
  datosAgrupadosDePokemones:any[]=[];
  urlImagen:string="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{i+1}}.png";

  constructor(private pokeApiService : PokeapiService) {
     this.declararPokemones();
     
        
   }
  ngOnInit() {
  }

  getPokemon(key:number){
    return this.pokeApiService.getPokemon(key).subscribe((data:any)=>{
        return data.sprites.front_default
    })
  }

  declararPokemones(){
    let pokemon=this.pokeApiService.getPokemones().toPromise();
    pokemon.then((results:any)=>{
        
        this.pokemones=results;
        this.urlSiguiente.push(results.next);
        this.results=results.results;
        this.results.forEach((pokemon)=>{
          this.peticionesGetPokemon.push(this.pokeApiService.getPokemonDeUrl(pokemon.url).toPromise());
        })     
        return Promise.all(this.peticionesGetPokemon)
    })
    .then((resultados:any)=>{
        console.log(resultados);
        
        this.datosAgrupadosDePokemones=resultados;
      }) 
    .catch((e)=>{
      console.log(e);
    })
  }

  mostrarMasPokemon(){
    let peticionesGetPokemon:any[]=[];
    let urlSiguiente=this.urlSiguiente[this.urlSiguiente.length-1];
    let pokemon=this.pokeApiService.getListaCompletaPokemonDeUrl(urlSiguiente).toPromise();
      pokemon.then((results:any)=>{
      this.pokemones=results;
      this.urlSiguiente.push(results.next);
      this.results.push(results.results);
      results.results.forEach((pokemon)=>{
        peticionesGetPokemon.push(this.pokeApiService.getPokemonDeUrl(pokemon.url).toPromise());
        
      })     
      return Promise.all(peticionesGetPokemon)
  })
  .then((resultados:any)=>{
    console.log("los datos agrupados de pokemones hasta el momento son:",this.datosAgrupadosDePokemones);
    
    console.log("el resultado en esta iteracion es:",resultados);
      resultados.forEach(elementos => {
        this.datosAgrupadosDePokemones.push(elementos);  
      });
      
      console.log("***************************");
      
      console.log("Los datos agrupados de pokemones son:",this.datosAgrupadosDePokemones);
      
      
    }) 
  .catch((e)=>{
    console.log(e);
    

  })
    
  }

  }