import { Action } from '@ngrx/store';

export const PortfolioRouteResolverActionTypes = {
  LOAD_HOME_PAGE: '[Route Resolver] Load Home Page',
  LOAD_HOME_PAGE_IDENTITY_SUCCESS: '[Route Resolver] Load Home Page Identity Success',
  LOAD_HOME_PAGE_IDENTITY_FAILURE: '[Route Resolver] Load Home Page Identity Failure',
  LOAD_HOME_PAGE_ARGUMENTS_SUCCESS: '[Route Resolver] Load Home Page Arguments Success',
  LOAD_HOME_PAGE_ARGUMENTS_FAILURE: '[Route Resolver] Load Home Page Arguments Failure',
  LOAD_HOME_PAGE_MAP_SUCCESS: '[Route Resolver] Load Home Page Map Success',
  LOAD_HOME_PAGE_MAP_FAILURE: '[Route Resolver] Load Home Page Map Failure',
  LOAD_EXPERIENCES: '[Route Resolver] Load experiences',
  LOAD_EXPERIENCES_SUCCESS: '[Route Resolver] Load experiences Success',
  LOAD_EXPERIENCES_FAILURE: '[Route Resolver] Load experiences Failure',
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

export class LoadHomePageArgumentsSuccessAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_ARGUMENTS_SUCCESS;

  constructor(public payload: Argument[]) {
  }
}

export class LoadHomePageArgumentsFailureAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_ARGUMENTS_FAILURE;

  constructor(public payload: ErrorResponse) {
  }
}

export class LoadHomePageMapSuccessAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_MAP_SUCCESS;

  constructor(public payload: HomePageMapEntry[]) {
  }
}

export class LoadHomePageMapFailureAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_MAP_FAILURE;

  constructor(public payload: ErrorResponse) {
  }
}

export class LoadExperiencesAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_EXPERIENCES;
  readonly payload: void;

  constructor() {
  }
}

export class LoadExperiencesSuccessAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_EXPERIENCES_SUCCESS;

  constructor(public payload: Experience[]) {
  }
}

export class LoadExperiencesFailureAction implements Action {
  readonly type: string = PortfolioRouteResolverActionTypes.LOAD_EXPERIENCES_FAILURE;

  constructor(public payload: ErrorResponse) {
  }
}
