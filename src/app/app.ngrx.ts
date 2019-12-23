import * as fromHomePage from './modules/home-page/store';
import * as fromPortfolioRouteResolver from './routes/route-resolver/portfolio-route-resolver.effects';

export interface AppState {
  homePage?: fromHomePage.State;
}

export function AppInitialState(): AppState {
  return {
    homePage: fromHomePage.InitialState,
  };
}

export const reducers = {
  homePage: fromHomePage.homePageReducer,
};

export const effects = [
  fromPortfolioRouteResolver.PortfolioRouteResolverEffects,
  fromHomePage.HomePageEffects
];
