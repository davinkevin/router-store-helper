import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {CommonModule} from '@angular/common';

import {RouterEffects} from './router.effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RouterEffects])
  ],
  exports: [EffectsModule]
})
export class RouterStoreHelperModule {}
