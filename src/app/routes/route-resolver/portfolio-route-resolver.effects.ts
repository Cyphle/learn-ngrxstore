import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { RouterStateUrl } from './portfolio-route-resolver.serializer';
import {
  LoadExperiencesAction, LoadExperiencesFailureAction, LoadExperiencesSuccessAction,
  LoadHomePageAction, LoadHomePageArgumentsFailureAction, LoadHomePageArgumentsSuccessAction, LoadHomePageIdentityFailureAction,
  LoadHomePageIdentitySuccessAction, LoadHomePageMapFailureAction, LoadHomePageMapSuccessAction,
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

  @Effect() public loadHomePageArguments$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadHomePageAction>(PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE),
      switchMap(() => this.portfolioService.getArguments()),
      map((args: Argument[]) => new LoadHomePageArgumentsSuccessAction(args)),
      catchError((error: ErrorResponse) => of(new LoadHomePageArgumentsFailureAction(error)))
    );

  @Effect({ dispatch: false }) public loadHomePageArgumentsFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadHomePageArgumentsFailureAction>(PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_ARGUMENTS_FAILURE),
      tap(() => this.router.navigate(['/error']))
    );

  @Effect() public loadHomePageMap$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadHomePageAction>(PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE),
      switchMap(() => this.portfolioService.getHomePageMap()),
      map((entries: HomePageMapEntry[]) => new LoadHomePageMapSuccessAction(entries)),
      catchError((error: ErrorResponse) => of(new LoadHomePageMapFailureAction(error)))
    );

  @Effect({ dispatch: false }) public loadHomePageMapFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadHomePageMapFailureAction>(PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_MAP_FAILURE),
      tap(() => this.router.navigate(['/error']))
    );

  @Effect() public loadExperiences$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadExperiencesAction>(PortfolioRouteResolverActionTypes.LOAD_EXPERIENCES),
      switchMap(() => this.portfolioService.getExperiences()),
      map((experiences: Experience[]) => new LoadExperiencesSuccessAction(experiences)),
      catchError((error: ErrorResponse) => of(new LoadExperiencesFailureAction(error)))
    );

  @Effect({ dispatch: false }) public loadExperiencesFailure: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadExperiencesFailureAction>(PortfolioRouteResolverActionTypes.LOAD_EXPERIENCES_FAILURE),
      tap(() => this.router.navigate(['/error']))
    );
}
