import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {LocationStoreHelperModule, RouterStoreHelperModule} from '@davinkevin/router-store-helper';
import {EffectsModule} from '@ngrx/effects';
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
      stateKey: 'router', // name of reducer key
    }),
    EffectsModule.forRoot([]),
    BrowserModule,
    RouterStoreHelperModule,
    LocationStoreHelperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
