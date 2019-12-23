import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from './portfolio-route-resolver.serializer';
import {
  LoadHomePageAction, LoadHomePageIdentityFailureAction,
  LoadHomePageIdentitySuccessAction,
  PortfolioRouteResolverActionTypes
} from './portfolio-route-resolver.action';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PortfolioService } from '../../services/portfolio.service';

@Injectable()
export class PortfolioRouteResolverEffects {
  constructor(private actions$: Actions,
              private router: Router,
              private portfolioService: PortfolioService) {

  }

  @Effect() public routerNavigation$: Observable<Action> = this.actions$
    .pipe(
      ofType<RouterNavigationAction<RouterStateUrl>>(ROUTER_NAVIGATION),
      map(route => route.payload.routerState),
      map(route => route.action(route.params))
    );

  @Effect() public loadHomePageIdentity$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadHomePageAction>(PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE),
      switchMap(() => this.portfolioService.getIdentity()),
      map((identity: Identity) => new LoadHomePageIdentitySuccessAction(identity)),
      catchError((error: ErrorResponse) => of(new LoadHomePageIdentityFailureAction(error)))
    );

  @Effect({ dispatch: false }) public loadHomePageIdentityFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadHomePageIdentityFailureAction>(PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_IDENTITY_FAILURE),
      tap(() => this.router.navigate(['/error']))
    );
}
