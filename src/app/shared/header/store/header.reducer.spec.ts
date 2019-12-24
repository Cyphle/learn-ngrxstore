import { LoadHomePageIdentitySuccessAction } from '../../../routes/route-resolver/portfolio-route-resolver.action';
import { State } from './header.state';
import { headerReducer } from './header.reducer';

describe('app/shared/header/store/header.reducer', () => {
  let initialState: State;

  beforeEach(() => {
    initialState = {
      firstname: '',
      lastname: '',
      logo: ''
    };
  });

  it('should initialize the store', () => {
    const state: State = headerReducer(undefined, {});

    expect(state).toEqual({
      firstname: '',
      lastname: '',
      logo: ''
    });
  });

  it('should update state with firstname, lastname, logo', () => {
    const action = new LoadHomePageIdentitySuccessAction({
      firstname: 'Cyril',
      lastname: 'PHAM-LE',
      city: 'Paris',
      country: 'France',
      job: 'Fullstack Software Craftsman',
      logo: '/assets/logo.jpg',
      background: '/assets/homepage.jpg'
    });

    const state: State = headerReducer(initialState, action);

    expect(state).toEqual({
      firstname: 'Cyril',
      lastname: 'PHAM-LE',
      logo: '/assets/logo.jpg'
    });
  });
});
