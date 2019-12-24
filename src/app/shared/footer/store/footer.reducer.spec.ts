import { LoadHomePageIdentitySuccessAction } from '../../../routes/route-resolver/portfolio-route-resolver.action';
import { State } from './footer.state';
import { footerReducer } from './footer.reducer';

describe('app/shared/footer/store/footer.reducer', () => {
  let initialState: State;

  beforeEach(() => {
    initialState = {
      logo: ''
    };
  });

  it('should initialize the store', () => {
    const state: State = footerReducer(undefined, {});

    expect(state).toEqual({
      logo: ''
    });
  });

  it('should update state with logo', () => {
    const action = new LoadHomePageIdentitySuccessAction({
      firstname: 'Cyril',
      lastname: 'PHAM-LE',
      city: 'Paris',
      country: 'France',
      job: 'Fullstack Software Craftsman',
      logo: '/assets/logo.jpg',
      background: '/assets/homepage.jpg'
    });

    const state: State = footerReducer(initialState, action);

    expect(state).toEqual({
      logo: '/assets/logo.jpg'
    });
  });
});
