import { AppState } from '../../../app.ngrx';
import { selectExperiences, State } from './experiences.state';

describe('app/modules/experiences/store/experiences.state', () => {
  let appState: AppState;
  let initialState: State;

  beforeEach(() => {
    initialState = {
      experiences: [
        {
          company: 'La Combe Du Lion Vert',
          logo: '/assets/lacombelogo.png',
          job: 'Software Craftsman Full Stack',
          description: 'Blabla',
          startDate: '2017-08-01',
          endDate: '2019-11-30'
        },
        {
          company: 'La Foncière Numérique',
          logo: '/assets/lacombelogo.png',
          job: 'Software Craftsman Full Stack Freelance',
          description: 'Blabla',
          startDate: '2019-12-02'
        }
      ]
    };

    appState = {
      experiences: initialState
    };
  });


  it('should select experiences', () => {
    const selected = selectExperiences(appState);

    expect(selected).toEqual([
      {
        company: 'La Combe Du Lion Vert',
        logo: 'http://localhost:3000/assets/lacombelogo.png',
        job: 'Software Craftsman Full Stack',
        description: 'Blabla',
        startDate: '2017-08-01',
        endDate: '2019-11-30'
      },
      {
        company: 'La Foncière Numérique',
        logo: 'http://localhost:3000/assets/lacombelogo.png',
        job: 'Software Craftsman Full Stack Freelance',
        description: 'Blabla',
        startDate: '2019-12-02'
      }
    ]);
  });
});
