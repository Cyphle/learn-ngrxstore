import * as fromHomePage from './modules/home-page/store';
import * as fromPortfolioRouteResolver from './routes/route-resolver/portfolio-route-resolver.effects';
import * as fromHeader from './shared/header/store';
import * as fromFooter from './shared/footer/store';

export interface AppState {
  header?: fromHeader.State;
  footer?: fromFooter.State;
  homePage?: fromHomePage.State;
}

export function AppInitialState(): AppState {
  return {
    header: fromHeader.InitialState,
    footer: fromFooter.InitialState,
    homePage: fromHomePage.InitialState,
  };
}

export const reducers = {
  header: fromHeader.headerReducer,
  footer: fromFooter.footerReducer,
  homePage: fromHomePage.homePageReducer,
};

export const effects = [
  fromPortfolioRouteResolver.PortfolioRouteResolverEffects,
  fromHomePage.HomePageEffects
];
