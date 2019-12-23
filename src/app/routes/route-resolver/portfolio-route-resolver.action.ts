import { Action } from '@ngrx/store';

export const PortfolioRouteResolverActionTypes = {
  LOAD_HOME_PAGE: '[Route Resolver] Load Home Page',
  LOAD_HOME_PAGE_IDENTITY_SUCCESS: '[Route Resolver] Load Home Page Identity Success',
  LOAD_HOME_PAGE_IDENTITY_FAILURE: '[Route Resolver] Load Home Page Identity Failure'
};

export class LoadHomePageAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE;
  readonly payload: void;

  constructor() {
  }
}

export class LoadHomePageIdentitySuccessAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_IDENTITY_SUCCESS;

  constructor(public payload: Identity) {
  }
}

export class LoadHomePageIdentityFailureAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_IDENTITY_FAILURE;

  constructor(public payload: ErrorResponse) {
  }
}
