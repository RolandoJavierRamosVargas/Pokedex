import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokedetallesComponent } from './components/pokedetalles/pokedetalles.component';
import { PokefavoritosComponent } from './components/pokefavoritos/pokefavoritos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Rutas
import { APP_ROUTES } from './app.router';
import { SearchPipe } from './search/search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokedetallesComponent,
    PokefavoritosComponent,
    SearchPipe,
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
