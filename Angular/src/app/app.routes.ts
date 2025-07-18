import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pelucia } from './pages/pelucia/pelucia'
import { Tcg } from './pages/tcg/tcg';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: Home
    },
    {
      path: 'pelucia',
      component: Pelucia
    },
    {
      path: 'tcg',
      component: Tcg 
    },
    {
      path: '**',
      redirectTo: 'home'
    }
  ];