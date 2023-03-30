import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contato1',
    loadComponent: () => import('./contato1/contato1.page').then( m => m.Contato1Page)
  },
  {
    path: 'contato2',
    loadComponent: () => import('./contato2/contato2.page').then( m => m.Contato2Page)
  },
];
