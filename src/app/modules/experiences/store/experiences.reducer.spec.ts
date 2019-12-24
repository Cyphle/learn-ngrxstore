import { LoadExperiencesSuccessAction } from '../../../routes/route-resolver/portfolio-route-resolver.action';
import { experiencesReducer } from './experiences.reducer';
import { State } from './experiences.state';

describe('app/modules/experiences/store/experiences.reducer', () => {
  let initialState: State;
  const experiences: Experience[] = [
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
  ];

  beforeEach(() => {
    initialState = {
      experiences: []
    };
  });

  it('should initialize the store', () => {
    const state: State = experiencesReducer(undefined, {});

    expect(state).toEqual({
      experiences: []
    });
  });

  it('should update home page content in store', () => {
    const action = new LoadExperiencesSuccessAction(experiences);

    const state: State = experiencesReducer(initialState, action);

    expect(state.experiences).toEqual(experiences);
  });
});
