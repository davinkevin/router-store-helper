import {Action} from '@ngrx/store';

export enum LocationActions {
  go = '[Location] go',
  forward = '[Location] forward',
  back = '[Location] back'
}

// => https://angular.io/api/common/Location#go

export class LocationGoAction implements Action {
  readonly type = LocationActions.go;
  constructor(public path: string, public query?: string) {}
}

// => https://angular.io/api/common/Location#forward

export class LocationForwardAction implements Action {
  readonly type = LocationActions.forward;
}

// => https://angular.io/api/common/Location#back

export class LocationBackAction implements Action {
  readonly type = LocationActions.back;
}

export type AllLocationActions
  = LocationGoAction
  | LocationForwardAction
  | LocationBackAction;
