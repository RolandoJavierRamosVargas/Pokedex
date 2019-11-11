import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { map } from 'rxjs/operators';
import { Pokemon } from '../modelo/Pokemon';

@Component({
  selector: 'app-pokedetalles',
  templateUrl: './pokedetalles.component.html',
  styles: []
})
export class PokedetallesComponent implements OnInit {

  
  pokemon:any;
  identificadorPokemon:string="";
  bandera:boolean=false;;

  
  constructor(private activatedRoute:ActivatedRoute,private pokeApiService:PokeapiService) {
        console.log(1);
        
       this.activatedRoute.params.subscribe((pokemon:any)=>{
         console.log(pokemon);
         this.identificadorPokemon=pokemon.id;
       })  
       let pokemon=this.pokeApiService.getPokemon(this.identificadorPokemon).toPromise();
       pokemon.then((pokemon:any)=>{
            console.log(pokemon);
            this.pokemon=pokemon;
            console.log(pokemon.species.url);
            
            return this.pokeApiService.getPokemonDeUrl(pokemon.species.url).toPromise();   
       }).then((result_pokemon=>{
        
         
         
         this.pokemon.masDetalles=result_pokemon;
         this.bandera=true;
         console.log(this.pokemon);
         


         
       }))
            
       
   }

  ngOnInit() {
  }


}
