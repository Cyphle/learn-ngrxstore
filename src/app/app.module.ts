import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppInitialState, effects, reducers } from './app.ngrx';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { PortfolioRouteResolverSerializer } from './routes/route-resolver/portfolio-route-resolver.serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { PortfolioService } from './services/portfolio.service';
import { HomePageModule } from './modules/home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot(reducers, { initialState: AppInitialState() }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      serializer: PortfolioRouteResolverSerializer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    HomePageModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: PortfolioRouteResolverSerializer },
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
