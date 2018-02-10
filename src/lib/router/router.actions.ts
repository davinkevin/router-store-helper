import {Action} from '@ngrx/store';
import {NavigationExtras, UrlTree} from '@angular/router';

export enum RouterActions {
  navigate = '[Router] navigate',
  navigateByUrl = '[Router] navigateByUrl'
}

// => https://angular.io/api/router/Router#navigate

export interface NavigateParameters {
  commands: any[];
  extras?: NavigationExtras;
}

export class RouterNavigateAction implements Action {
  readonly type = RouterActions.navigate;
  constructor(public params: NavigateParameters) {}
}

// => https://angular.io/api/router/Router#navigateByUrl

export interface NavigateByUrlParameters {
  url: string | UrlTree;
  extras?: NavigationExtras;
}

export class RouterNavigateByUrlAction implements Action {
  readonly type = RouterActions.navigateByUrl;
  constructor(public params: NavigateByUrlParameters) {}
}

export type AllRouterActions
  = RouterNavigateAction
  | RouterNavigateByUrlAction;
