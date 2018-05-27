import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  LocationBackAction,
  LocationForwardAction,
  LocationGoAction
} from '../../../projects/davinkevin/router-store-helper/src/lib/location/location.actions';

@Component({
  selector: 'rsh-location',
  template: `
    <p>
      location works!
    </p>
    <button (click)="go('home')">Go !</button>
    <button (click)="back()">back !</button>
    <button (click)="forward()">Forward !</button>
  `,
  styles: []
})
export class LocationComponent {

  constructor(private store: Store<any>) { }

  go(path: string, query?: string, state?: any) {
    this.store.dispatch(new LocationGoAction(path, query));
  }

  back() {
    this.store.dispatch(new LocationBackAction());
  }

  forward() {
    this.store.dispatch(new LocationForwardAction());
  }

}
