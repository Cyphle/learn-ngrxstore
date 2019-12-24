import { PortfolioRouteResolverActionTypes } from '../../../routes/route-resolver/portfolio-route-resolver.action';
import { InitialState, State } from './header.state';

export function headerReducer(state: State = InitialState, { type, payload }: any): State {
  switch (type) {
    case PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE:
      return {
        ...state,
        firstname: '',
        lastname: '',
        logo: ''
      };
    case PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_IDENTITY_SUCCESS:
      return {
        ...state,
        firstname: payload.firstname,
        lastname: payload.lastname,
        logo: payload.logo
      };
    default:
      return state;
  }
}
