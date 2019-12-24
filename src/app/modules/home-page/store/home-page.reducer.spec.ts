import { State } from './home-page.state';
import { homePageReducer } from './home-page.reducer';
import {
  LoadHomePageArgumentsSuccessAction,
  LoadHomePageIdentitySuccessAction,
  LoadHomePageMapSuccessAction
} from '../../../routes/route-resolver/portfolio-route-resolver.action';

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
      },
      arguments: [],
      mapEntries: []
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
      },
      arguments: [],
      mapEntries: []
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
      },
      arguments: [],
      mapEntries: []
    });
  });

  it('should update state with arguments', () => {
    const action = new LoadHomePageArgumentsSuccessAction([
      {
        picture: '../../../assets/dev-back.png',
        title: 'Développeur Back',
        content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
      },
      {
        picture: '../../../assets/dev-front.png',
        title: 'Développeur Front',
        content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
      }
    ]);

    const state: State = homePageReducer(initialState, action);

    expect(state).toEqual({
      identity: {
        firstname: '',
        lastname: '',
        city: '',
        country: '',
        job: '',
        logo: '',
        background: ''
      },
      arguments: [
        {
          picture: '../../../assets/dev-back.png',
          title: 'Développeur Back',
          content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
        },
        {
          picture: '../../../assets/dev-front.png',
          title: 'Développeur Front',
          content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
        }
      ],
      mapEntries: []
    });
  });

  it('should update state with map entries', () => {
    const mapEntries = [
      {
        path: '/about',
        picture: '../../../../../assets/philosophie.jpg',
        content: 'Ma philosophie, mes skills, ma formation et quelques docs'
      },
      {
        path: '/experience',
        picture: '../../../../../assets/experience.jpg',
        content: 'Mes expériences'
      },
      {
        path: '/art',
        picture: '../../../../../assets/passion.jpg',
        content: 'Mes passions : le dessin et la photo'
      }
    ];
    const action = new LoadHomePageMapSuccessAction(mapEntries);

    const state: State = homePageReducer(initialState, action);

    expect(state).toEqual({
      identity: {
        firstname: '',
        lastname: '',
        city: '',
        country: '',
        job: '',
        logo: '',
        background: ''
      },
      arguments: [],
      mapEntries
    });
  });
});
