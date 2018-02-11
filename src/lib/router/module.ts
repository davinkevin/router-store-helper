import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './router.effects';
import {CommonModule} from '@angular/common';
import {RouterStateSerializer} from '@ngrx/router-store';
import {SimpleRouterStateSerializer} from './simple-router.serializer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RouterEffects])
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: SimpleRouterStateSerializer }
  ],
  exports: [EffectsModule]
})
export class RouterStoreHelperModule {}
