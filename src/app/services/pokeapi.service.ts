import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {


  url:string= "https://pokeapi.co/api/v2/pokemon";
  constructor(private http:HttpClient) { }
  
  getPokemones(){
    let url=this.url;
    return this.http.get(url).pipe(map(results=>{
      return results;
    }))
  }
  getPokemon(key:number){
    let url=`${this.url}/${key}/`;
    return this.http.get(url).pipe(map(res=>{
      return res;
    }))
  }
  getPoke(codigo:any[]){
    codigo.forEach((value)=>{
      console.log(value);
      
    })
  }
  getPokemonDeUrl(url:string){
    return this.http.get(url).pipe(map(result=>{
      return result;
    }))
  }
  getListaCompletaPokemonDeUrl(url:string){
    return this.http.get(url).pipe(map(result=>{
      return result;
    }))
  }
  

  }
  

  
  
    



  
  


    


