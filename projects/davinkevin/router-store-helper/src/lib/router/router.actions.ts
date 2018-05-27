import {Action} from '@ngrx/store';
import {NavigationExtras, UrlTree} from '@angular/router';

export enum RouterActions {
  navigate = '[Router] navigate',
  navigateByUrl = '[Router] navigateByUrl'
}

// => https://angular.io/api/router/Router#navigate

export class RouterNavigateAction implements Action {
  readonly type = RouterActions.navigate;
  constructor(public commands: any[], public extras?: NavigationExtras) {}
}

// => https://angular.io/api/router/Router#navigateByUrl

export class RouterNavigateByUrlAction implements Action {
  readonly type = RouterActions.navigateByUrl;
  constructor(public url: string | UrlTree, public extras?: NavigationExtras) {}
}

export type AllRouterActions = RouterNavigateAction | RouterNavigateByUrlAction;
