import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {RouterActions, RouterNavigateAction, RouterNavigateByUrlAction} from './router.actions';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class RouterEffects {

  @Effect({dispatch: false})
  navigate$: Observable<RouterNavigateAction> = this.actions$
    .pipe(
      ofType(RouterActions.navigate),
      tap(({commands, extras}: RouterNavigateAction) => this.router.navigate(commands, extras))
    );

  @Effect({dispatch: false})
  navigateByUrl$: Observable<RouterNavigateByUrlAction> = this.actions$
    .pipe(
      ofType(RouterActions.navigateByUrl),
      tap(({url, extras}: RouterNavigateByUrlAction) => this.router.navigateByUrl(url, extras))
    );

  constructor(private actions$: Actions, private router: Router) {}
}
