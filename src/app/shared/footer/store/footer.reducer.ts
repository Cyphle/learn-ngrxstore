import { PortfolioRouteResolverActionTypes } from '../../../routes/route-resolver/portfolio-route-resolver.action';
import { InitialState, State } from './footer.state';

export function footerReducer(state: State = InitialState, { type, payload }: any): State {
  switch (type) {
    case PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE:
      return {
        ...state,
        logo: ''
      };
    case PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_IDENTITY_SUCCESS:
      return {
        ...state,
        logo: payload.logo
      };
    default:
      return state;
  }
}
