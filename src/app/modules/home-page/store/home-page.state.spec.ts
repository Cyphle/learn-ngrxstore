import {
  selectHomePageArguments,
  selectHomePageBackground,
  selectHomePageCity,
  selectHomePageCountry,
  selectHomePageFirstname,
  selectHomePageJob,
  selectHomePageLastname,
  selectHomePageLogo, selectHomePageMap,
  State
} from './home-page.state';
import { AppState } from '../../../app.ngrx';

describe('app/modules/home-page/store/home-page.state', () => {
  let appState: AppState;
  let initialState: State;
  const args = [
    {
      picture: '/assets/dev-back.png',
      title: 'Développeur Back',
      content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
    },
    {
      picture: '/assets/dev-front.png',
      title: 'Développeur Front',
      content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
    },
    {
      picture: '/assets/craftsman.png',
      title: 'Software Craftsman',
      content: 'Je crois dur comme fer à la philosophie Craftsman pour la qualité de code et la valeur délivrée'
    },
    {
      picture: '/assets/devops.png',
      title: 'DevOps',
      content: 'Je m\'intéresse aux problématiques DevOps avec Docker et Jenkins'
    },
    {
      picture: '/assets/dessin.png',
      title: 'Dessinateur',
      content: 'J\'adore le dessin'
    },
    {
      picture: '/assets/photo.png',
      title: 'Photographe',
      content: 'Et la photo'
    }
  ];
  const mapEntries = [
    {
      path: '/about',
      picture: '/assets/philosophie.jpg',
      content: 'Ma philosophie, mes skills, ma formation et quelques docs'
    },
    {
      path: '/experience',
      picture: '/assets/experience.jpg',
      content: 'Mes expériences'
    },
    {
      path: '/art',
      picture: '/assets/passion.jpg',
      content: 'Mes passions : le dessin et la photo'
    }
  ];

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
      },
      arguments: args,
      mapEntries
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

  it('should select home page arguments', () => {
    const selected = selectHomePageArguments(appState);

    expect(selected).toEqual([
      [
        {
          picture: 'http://localhost:3000/assets/dev-back.png',
          title: 'Développeur Back',
          content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
        },
        {
          picture: 'http://localhost:3000/assets/dev-front.png',
          title: 'Développeur Front',
          content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
        },
        {
          picture: 'http://localhost:3000/assets/craftsman.png',
          title: 'Software Craftsman',
          content: 'Je crois dur comme fer à la philosophie Craftsman pour la qualité de code et la valeur délivrée'
        }
      ],
      [
        {
          picture: 'http://localhost:3000/assets/devops.png',
          title: 'DevOps',
          content: 'Je m\'intéresse aux problématiques DevOps avec Docker et Jenkins'
        },
        {
          picture: 'http://localhost:3000/assets/dessin.png',
          title: 'Dessinateur',
          content: 'J\'adore le dessin'
        },
        {
          picture: 'http://localhost:3000/assets/photo.png',
          title: 'Photographe',
          content: 'Et la photo'
        }
      ]
    ]);
  });

  it('should select home page map', () => {
    const selected = selectHomePageMap(appState);

    expect(selected).toEqual([
      {
        path: '/about',
        picture: 'http://localhost:3000/assets/philosophie.jpg',
        content: 'Ma philosophie, mes skills, ma formation et quelques docs'
      },
      {
        path: '/experience',
        picture: 'http://localhost:3000/assets/experience.jpg',
        content: 'Mes expériences'
      },
      {
        path: '/art',
        picture: 'http://localhost:3000/assets/passion.jpg',
        content: 'Mes passions : le dessin et la photo'
      }
    ]);
  });
});
