import { Routes } from '@angular/router';
import { MainMenuComponent } from './views/main-menu/main-menu.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
  { path: 'main-menu', component: MainMenuComponent },
  // { path: '**', redirectTo: '' },
];
