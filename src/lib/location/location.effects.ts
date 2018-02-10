import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LocationActions, LocationBackAction, LocationForwardAction, LocationGoAction} from './location.actions';
import {tap} from 'rxjs/operators';
import {Location} from '@angular/common';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LocationEffects {

  @Effect({dispatch: false})
  go$: Observable<LocationGoAction> = this.actions$
    .pipe(
      ofType(LocationActions.go),
      tap((a: LocationGoAction) => this.location.go(a.params.path, a.params.query))
    );

  @Effect({dispatch: false})
  forward$: Observable<LocationForwardAction> = this.actions$
    .pipe(
      ofType<LocationForwardAction>(LocationActions.forward),
      tap(() => this.location.forward())
    );

  @Effect({dispatch: false})
  back$: Observable<LocationBackAction> = this.actions$
    .pipe(
      ofType<LocationBackAction>(LocationActions.back),
      tap(() => this.location.back())
    );

  constructor(private actions$: Actions, private location: Location) {}
}
