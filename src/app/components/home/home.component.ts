import { Component, HostListener,OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { AuthService } from '../../services/auth.service';
import { FirebaseServiceService } from '../../services/firebase-service.service';
import { User } from '../template/userTemplate';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  idUser={
    idPokemon:'',
    email:''
  }

  showGoUpButton: boolean;
  showScrollHeight = 400;
  hideScrollHeight = 200;

  nombreDeBusqueda:string="";
  pokemones:any ;
  results:any[]=[];
  
  urlSiguiente:string [] =[];
  peticionesGetPokemon:any[]=[];
  datosAgrupadosDePokemones:any[]=[];

  pokemonesAgregados:any[]=[];


  constructor(private pokeApiService : PokeapiService,public auth:AuthService,public firebaseService:FirebaseServiceService) {
    this.auth.getDatesUser().subscribe(user=>{
    })
     this.declararPokemones();
     this.showGoUpButton=false;
     
     if(localStorage.getItem('key')){
       this.pokemonesAgregados=JSON.parse(localStorage.getItem('key'));
     }
        
   }
  ngOnInit() {
  }

  getPokemon(key:string){
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
      console.log("Los resultados son: ",resultados);
      
        this.datosAgrupadosDePokemones=resultados;
        this.datosAgrupadosDePokemones.sort((primerPokemon,segundoPokemon) => primerPokemon.name.localeCompare(segundoPokemon.name));   
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
      resultados.forEach(elementos => {
        this.datosAgrupadosDePokemones.push(elementos);  
      });
      this.datosAgrupadosDePokemones.sort((primerPokemon,segundoPokemon) => primerPokemon.name.localeCompare(segundoPokemon.name));
    }) 
  .catch((e)=>{
    console.log(e);
    

  }) 
  }

scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  } 

 agregarPokemon(id:string) {
   if(!this.pokemonesAgregados.includes(id)){
    this.pokemonesAgregados.push(id);
    this.guardarPokemon();  
  }
 }
 guardarPokemon(){
   localStorage.setItem('key',JSON.stringify(this.pokemonesAgregados));
 }
}