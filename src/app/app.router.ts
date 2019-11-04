import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedetallesComponent } from './components/pokedetalles/pokedetalles.component';
import { PokefavoritosComponent } from './components/pokefavoritos/pokefavoritos.component';


const RUTAS: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokedetalles/:id', component: PokedetallesComponent },
    { path: 'pokefavoritos', component: PokefavoritosComponent },
    { path: '**',pathMatch : 'full', redirectTo: 'home' }
];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);
