import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './router.effects';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RouterEffects])
  ],
  exports: [EffectsModule]
})
export class RouterStoreHelperModule {}
