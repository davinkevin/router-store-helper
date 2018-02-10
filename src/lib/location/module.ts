import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {LocationEffects} from './location.effects';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([LocationEffects])
  ],
  exports: [EffectsModule]
})
export class LocationStoreHelperModule {}
