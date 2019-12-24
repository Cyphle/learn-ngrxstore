import { AppState } from '../../../app.ngrx';
import { selectLogo, State } from './footer.state';

describe('app/shared/footer/store/footer.state', () => {
  let appState: AppState;
  let initialState: State;

  beforeEach(() => {
    initialState = {
      logo: '/logo.png'
    };

    appState = {
      footer: initialState
    };
  });

  it('should select home page logo', () => {
    const logo = selectLogo(appState);

    expect(logo).toEqual('http://localhost:3000/logo.png');
  });
});
