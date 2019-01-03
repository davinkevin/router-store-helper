import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';

import {LocationStoreHelperModule, RouterStoreHelperModule, SimpleRouterStateSerializer} from '@davinkevin/router-store-helper';

import {AppComponent} from './app.component';
import {LocationComponent} from './location/location.component';
import {RouterComponent} from './router/router.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'location', component: LocationComponent},
  {path: 'router', component: RouterComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    RouterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: SimpleRouterStateSerializer,
    }),
    EffectsModule.forRoot([]),
    BrowserModule,
    RouterStoreHelperModule,
    LocationStoreHelperModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
