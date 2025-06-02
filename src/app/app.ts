import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class App {
  protected title = 'app';
}
