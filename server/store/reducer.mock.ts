import { ActionTypes, MockAction } from './action-types.mock';

export const reducer = (state: any, action: MockAction): any  => {
  switch (action.type) {
    case ActionTypes.MOCK_INIT_DATA:
      return state[action.payload.type] = action.payload.data;
    case ActionTypes.MOCK_UPDATE_TITLE:
      return state.identity.title = action.payload;
    case ActionTypes.MOCK_UPDATE_EXPERIENCE:
      return state.experiences = state
        .experiences
        .map(experience => experience.company === action.payload.company ? action.payload : experience);
    default:
      return state;
  }
};
