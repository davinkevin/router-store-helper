import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {NavigationExtras, UrlTree} from '@angular/router';
import {
  RouterNavigateAction,
  RouterNavigateByUrlAction
} from '../../../projects/davinkevin/router-store-helper/src/lib/router/router.actions';

@Component({
  selector: 'rsh-router',
  template: `
    <p>
      router works!
    </p>
    <button (click)="navigate(['home'])">Navigate !</button>
    <button (click)="navigateByUrl('/location')">Navigate by url !</button>
  `,
  styles: []
})
export class RouterComponent {

  constructor(private store: Store<any>) { }

  navigate(commands: any[], extras?: NavigationExtras) {
    this.store.dispatch(new RouterNavigateAction(commands, extras));
  }

  navigateByUrl(url: string | UrlTree, extras?: NavigationExtras) {
    this.store.dispatch(new RouterNavigateByUrlAction(url, extras));
  }

}
