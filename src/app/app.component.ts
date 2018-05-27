import { Component } from '@angular/core';

@Component({
  selector: 'rsh-root',
  template: `
    <h1>Router Store Helper</h1>

    <a routerLink="/location">Go to the page location</a>
    <br/>
    <a routerLink="/router">Go to the page router</a>
    <br/>
    <a routerLink="/home">Go to the page home</a>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'rsh';
}
