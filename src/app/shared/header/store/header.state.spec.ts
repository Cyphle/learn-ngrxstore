import { AppState } from '../../../app.ngrx';
import { selectFirstname, selectLastname, selectLogo, State } from './header.state';

describe('app/shared/header/store/header.state', () => {
  let appState: AppState;
  let initialState: State;

  beforeEach(() => {
    initialState = {
      firstname: 'Cyril',
      lastname: 'PHAM-LE',
      logo: '/logo.png'
    };

    appState = {
      header: initialState
    };
  });

  it('should select header firstname', () => {
    const firstname = selectFirstname(appState);

    expect(firstname).toEqual('Cyril');
  });

  it('should select header lastname', () => {
    const lastname = selectLastname(appState);

    expect(lastname).toEqual('PHAM-LE');
  });

  it('should select header logo', () => {
    const logo = selectLogo(appState);

    expect(logo).toEqual('http://localhost:3000/logo.png');
  });
});
