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

  
  pokemon:Pokemon;

  constructor(private activatedRoute:ActivatedRoute,private pokeApiService:PokeapiService) {
   
   }

  ngOnInit() {
  }

}
