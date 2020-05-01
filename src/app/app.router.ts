import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedetallesComponent } from './components/pokedetalles/pokedetalles.component';
import { PokefavoritosComponent } from './components/pokefavoritos/pokefavoritos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';


const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokedetalles/:id', component: PokedetallesComponent },
    { path: 'pokefavoritos', component: PokefavoritosComponent },
    { path: 'pokefavoritos/:id', component: PokefavoritosComponent },
    { path: '**',pathMatch : 'full', redirectTo: 'home' },
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);
