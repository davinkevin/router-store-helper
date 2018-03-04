import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {RouterActions, RouterNavigateAction, RouterNavigateByUrlAction} from './router.actions';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RouterEffects {

  @Effect({dispatch: false})
  navigate$: Observable<RouterNavigateAction> = this.actions$
    .pipe(
      ofType(RouterActions.navigate),
      tap((a: RouterNavigateAction) => this.router.navigate(a.commands, a.extras))
    );

  @Effect({dispatch: false})
  navigateByUrl$: Observable<RouterNavigateByUrlAction> = this.actions$
    .pipe(
      ofType(RouterActions.navigateByUrl),
      tap((a: RouterNavigateByUrlAction) => this.router.navigateByUrl(a.url, a.extras))
    );

  constructor(private actions$: Actions, private router: Router) {}
}
