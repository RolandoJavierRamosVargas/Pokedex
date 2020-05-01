import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InfiniteScrollModule} from 'ngx-infinite-scroll';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokedetallesComponent } from './components/pokedetalles/pokedetalles.component';
import { PokefavoritosComponent } from './components/pokefavoritos/pokefavoritos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';




import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTES } from './app.router';
import { SearchPipe } from './search/search.pipe';
import { PokeapiService } from './services/pokeapi.service';
import { AuthService } from './services/auth.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PokedetallesComponent,
    PokefavoritosComponent,
    SearchPipe,
    LoginComponent,
    RegisterComponent,
    UserComponent
    
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [
    PokeapiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
