import { InitialState, State } from './experiences.state';
import { PortfolioRouteResolverActionTypes } from '../../../routes/route-resolver/portfolio-route-resolver.action';

export function experiencesReducer(state: State = InitialState, { type, payload }: any): State {
  switch (type) {
    case PortfolioRouteResolverActionTypes.LOAD_EXPERIENCES:
      return { ...state, experiences: [] };
    case PortfolioRouteResolverActionTypes.LOAD_EXPERIENCES_SUCCESS:
      return {
        ...state,
        experiences: payload
      };
    default:
      return state;
  }
}
