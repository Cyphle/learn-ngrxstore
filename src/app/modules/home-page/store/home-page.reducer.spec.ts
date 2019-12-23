import { State } from './home-page.state';
import { homePageReducer } from './home-page.reducer';
import { LoadHomePageIdentitySuccessAction } from '../../../routes/route-resolver/portfolio-route-resolver.action';

describe('app/modules/home-page/store/home-page.reducer', () => {
  let initialState: State;

  beforeEach(() => {
    initialState = {
      identity: {
        firstname: '',
        lastname: '',
        city: '',
        country: '',
        job: '',
        logo: '',
        background: ''
      }
    };
  });

  it('should initialize the store', () => {
    const state: State = homePageReducer(undefined, {});

    expect(state).toEqual({
      identity: {
        firstname: '',
        lastname: '',
        city: '',
        country: '',
        job: '',
        logo: '',
        background: ''
      }
    });
  });

  it('should update state with identity', () => {
    const action = new LoadHomePageIdentitySuccessAction({
      firstname: 'Cyril',
      lastname: 'PHAM-LE',
      city: 'Paris',
      country: 'France',
      job: 'Fullstack Software Craftsman',
      logo: '/assets/logo.jpg',
      background: '/assets/homepage.jpg'
    });

    const state: State = homePageReducer(initialState, action);

    expect(state).toEqual({
      identity: {
        firstname: 'Cyril',
        lastname: 'PHAM-LE',
        city: 'Paris',
        country: 'France',
        job: 'Fullstack Software Craftsman',
        logo: '/assets/logo.jpg',
        background: '/assets/homepage.jpg'
      }
    });
  });
});
