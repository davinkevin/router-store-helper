import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {LocationEffects} from './location.effects';

@NgModule({
  imports: [
    EffectsModule.forFeature([LocationEffects])
  ]
})
export class LocationStoreHelper {}
