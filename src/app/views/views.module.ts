import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '**', redirectTo: 'main-menu', pathMatch: 'full' },
      { path: 'main-menu', component: MainMenuComponent },
    ]),
    MainMenuComponent,
  ],
})
export class ViewsModule {}
