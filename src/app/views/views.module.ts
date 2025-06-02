import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
      { path: 'main-menu', component: MainMenuComponent },
    ]),
  ],
})
export class ViewsModule {}
