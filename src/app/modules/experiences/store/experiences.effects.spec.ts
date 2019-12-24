import { ExperiencesEffects } from './experiences.effects';
import { Observable } from 'rxjs';
import { PortfolioService } from '../../../services/portfolio.service';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import {
  LoadExperiencesAction,
  LoadExperiencesFailureAction,
  LoadExperiencesSuccessAction,
  UpdateExperienceAction, UpdateExperienceFailureAction, UpdateExperienceSuccessAction
} from './experiences.actions';
import { Router } from '@angular/router';

describe('app/modules/experiences/store/experiences.effects', () => {
  let effects: ExperiencesEffects;
  let actions: Observable<any>;
  let portfolioServiceSpy: jasmine.SpyObj<PortfolioService>;
  let routerSpy: jasmine.SpyObj<Router>;
  const experiences: Experience[] = [
    {
      company: 'La Foncière Numérique',
      logo: '/assets/lacombelogo.png',
      job: 'Software Craftsman Full Stack Freelance',
      description: 'Blabla',
      startDate: '2019-12-02'
    }
  ];

  beforeEach(() => {
    portfolioServiceSpy = jasmine.createSpyObj('PortfolioService', ['getExperiences', 'updateExperience']);
    routerSpy = jasmine.createSpyObj('router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        ExperiencesEffects,
        provideMockActions(() => actions),
        {
          provide: PortfolioService,
          useValue: portfolioServiceSpy
        },
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    });

    effects = TestBed.get(ExperiencesEffects);
  });

  it('should dispatch load experiences action', () => {
    portfolioServiceSpy.getExperiences.and.returnValue(cold('-a', { a: experiences }));
    const action = new LoadExperiencesAction();
    const expectedAction = new LoadExperiencesSuccessAction(experiences);

    actions = hot('--a', { a: action });

    expect(effects.loadExperiences$).toBeObservable(cold('---b', { b: expectedAction }));
    expect(portfolioServiceSpy.getExperiences).toHaveBeenCalled();
  });

  it('should dispatch load experience failure when there is an error', () => {
    portfolioServiceSpy.getExperiences.and.returnValue(cold('-#', undefined, { error: 'Error' }));

    actions = hot('-a', { a: new LoadExperiencesAction() });

    expect(effects.loadExperiences$).toBeObservable(cold('--(b|)', { b: new LoadExperiencesFailureAction({ error: 'Error' }) }));
  });

  it('should handle load experience failure', () => {
    const action = new LoadExperiencesFailureAction({ error: 'Error' });

    actions = hot('--a', { a: action });

    expect(effects.loadExperiencesFailure).toBeObservable(cold('--b', { b: action }));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/error']);
  });


  it('should dispatch update home page title success action', () => {
    portfolioServiceSpy.updateExperience.and.returnValue(cold('--a', { a: experiences[0] }));
    const action = new UpdateExperienceAction(experiences[0]);
    const expectedAction = new UpdateExperienceSuccessAction();

    actions = hot('-a', { a: action });

    expect(effects.updateExperience$).toBeObservable(cold('---b', { b: expectedAction }));
    expect(portfolioServiceSpy.updateExperience).toHaveBeenCalled();
  });

  it('should dispatch update experience failure when there is an error', () => {
    portfolioServiceSpy.updateExperience.and.returnValue(cold('-#', undefined, { error: 'Error' }));

    actions = hot('-a', { a: new UpdateExperienceAction(experiences[0]) });

    expect(effects.updateExperience$).toBeObservable(cold('--b', { b: new UpdateExperienceFailureAction({ error: 'Error' }) }));
  });

  it('should handle update experience success', () => {
    actions = hot('-a', { a: new UpdateExperienceSuccessAction() });

    expect(effects.updateExperienceSuccess$).toBeObservable(cold('-b', { b: new LoadExperiencesAction() }));
  });

  it('should handle update experience failure', () => {
    const action = new UpdateExperienceFailureAction({ error: 'title' });

    actions = hot('--a', { a: action });

    expect(effects.updateExperiencesFailure$).toBeObservable(cold('--b', { b: action }));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/error']);
  });
});
