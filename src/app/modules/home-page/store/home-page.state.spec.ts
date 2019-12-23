import {
  selectHomePageBackground,
  selectHomePageCity,
  selectHomePageCountry,
  selectHomePageFirstname,
  selectHomePageJob,
  selectHomePageLastname,
  selectHomePageLogo,
  State
} from './home-page.state';
import { AppState } from '../../../app.ngrx';

describe('app/modules/home-page/store/home-page.state', () => {
  let appState: AppState;
  let initialState: State;

  beforeEach(() => {
    initialState = {
      identity: {
        firstname: 'Cyril',
        lastname: 'PHAM-LE',
        city: 'Paris',
        country: 'France',
        job: 'Craftsman',
        logo: '/logo.png',
        background: '/homepage.jpg'
      }
    };

    appState = {
      homePage: initialState
    };
  });

  it('should select home page firstname', () => {
    const firstname = selectHomePageFirstname(appState);

    expect(firstname).toEqual('Cyril');
  });

  it('should select home page lastname', () => {
    const lastname = selectHomePageLastname(appState);

    expect(lastname).toEqual('PHAM-LE');
  });

  it('should select home page city', () => {
    const city = selectHomePageCity(appState);

    expect(city).toEqual('Paris');
  });

  it('should select home page country', () => {
    const country = selectHomePageCountry(appState);

    expect(country).toEqual('France');
  });

  it('should select home page job', () => {
    const job = selectHomePageJob(appState);

    expect(job).toEqual('Craftsman');
  });

  it('should select home page logo', () => {
    const logo = selectHomePageLogo(appState);

    expect(logo).toEqual('http://localhost:3000/logo.png');
  });

  it('should select home page background image', () => {
    const logo = selectHomePageBackground(appState);

    expect(logo).toEqual('http://localhost:3000/homepage.jpg');
  });
});
