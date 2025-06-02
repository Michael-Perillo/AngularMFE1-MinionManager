import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ViewsModule } from './views/views.module';

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes), RouterOutlet, ViewsModule],
  declarations: [App],
  bootstrap: [App],
})
export class AppModule {}
