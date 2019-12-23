import { InitialState, State } from './home-page.state';
import { PortfolioRouteResolverActionTypes } from '../../../routes/route-resolver/portfolio-route-resolver.action';

export function homePageReducer(state: State = InitialState, { type, payload }: any): State {
  switch (type) {
    case PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE:
      return {
        ...state, identity: {
          firstname: '',
          lastname: '',
          city: '',
          country: '',
          job: '',
          logo: '',
          background: ''
        }
      };
    case PortfolioRouteResolverActionTypes.LOAD_HOME_PAGE_IDENTITY_SUCCESS:
      return {
        ...state,
        identity: payload
      };
    default:
      return state;
  }
}
