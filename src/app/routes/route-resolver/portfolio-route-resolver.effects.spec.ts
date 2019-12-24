import { TestBed } from '@angular/core/testing';
import { PortfolioRouteResolverEffects } from './portfolio-route-resolver.effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import {
  LoadHomePageAction, LoadHomePageArgumentsFailureAction, LoadHomePageArgumentsSuccessAction,
  LoadHomePageIdentityFailureAction,
  LoadHomePageIdentitySuccessAction, LoadHomePageMapFailureAction, LoadHomePageMapSuccessAction
} from './portfolio-route-resolver.action';
import { PortfolioService } from '../../services/portfolio.service';

describe('src/app/routes/route-resolver/portfolio-route-resolver.effects', () => {
  let effects: PortfolioRouteResolverEffects;
  let actions: Observable<any>;
  let routerSpy: jasmine.SpyObj<Router>;
  let portfolioServiceSpy: jasmine.SpyObj<PortfolioService>;
  const identity: Identity = {
    firstname: 'Cyril',
    lastname: 'PHAM-LE',
    city: 'Paris',
    country: 'France',
    job: 'Fullstack Software Craftsman',
    logo: '/assets/logo.jpg',
    background: '/assets/homepage.jpg'
  };
  const args: Argument[] = [
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
  ];
  const mapEntries: HomePageMapEntry[] = [
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

  beforeEach(() => {
    portfolioServiceSpy = jasmine.createSpyObj('PortfolioService',
      ['getIdentity', 'getArguments', 'getHomePageMap', 'getExperiences']
    );
    routerSpy = jasmine.createSpyObj('router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        PortfolioRouteResolverEffects,
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

    effects = TestBed.get(PortfolioRouteResolverEffects);
  });

  it('should dispatch load home page identity action', () => {
    portfolioServiceSpy.getIdentity.and.returnValue(cold('-a', { a: identity }));
    const action = new LoadHomePageAction();
    const expectedAction = new LoadHomePageIdentitySuccessAction(identity);

    actions = hot('--a', { a: action });

    expect(effects.loadHomePageIdentity$).toBeObservable(cold('---b', { b: expectedAction }));
    expect(portfolioServiceSpy.getIdentity).toHaveBeenCalled();
  });

  it('should dispatch load home page identity failure when there is an error', () => {
    portfolioServiceSpy.getIdentity.and.returnValue(cold('-#', undefined, { error: 'Error' }));

    actions = hot('-a', { a: new LoadHomePageAction() });

    expect(effects.loadHomePageIdentity$).toBeObservable(cold('--(b|)', { b: new LoadHomePageIdentityFailureAction({ error: 'Error' }) }));
  });

  it('should handle load home page identity failure', () => {
    const action = new LoadHomePageIdentityFailureAction({ error: 'Error' });

    actions = hot('--a', { a: action });

    expect(effects.loadHomePageIdentityFailure$).toBeObservable(cold('--b', { b: action }));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/error']);
  });

  it('should dispatch load home page arguments action', () => {
    portfolioServiceSpy.getArguments.and.returnValue(cold('-a', { a: args }));
    const action = new LoadHomePageAction();
    const expectedAction = new LoadHomePageArgumentsSuccessAction(args);

    actions = hot('--a', { a: action });

    expect(effects.loadHomePageArguments$).toBeObservable(cold('---b', { b: expectedAction }));
    expect(portfolioServiceSpy.getArguments).toHaveBeenCalled();
  });

  it('should dispatch load home page arguments failure when there is an error', () => {
    portfolioServiceSpy.getArguments.and.returnValue(cold('-#', undefined, { error: 'Error' }));

    actions = hot('-a', { a: new LoadHomePageAction() });

    expect(effects.loadHomePageArguments$).toBeObservable(
      cold('--(b|)', { b: new LoadHomePageArgumentsFailureAction({ error: 'Error' }) })
    );
  });

  it('should handle load home page arguments failure', () => {
    const action = new LoadHomePageArgumentsFailureAction({ error: 'Error' });

    actions = hot('--a', { a: action });

    expect(effects.loadHomePageArgumentsFailure$).toBeObservable(cold('--b', { b: action }));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/error']);
  });

  it('should dispatch load home page map action', () => {
    portfolioServiceSpy.getHomePageMap.and.returnValue(cold('-a', { a: mapEntries }));
    const action = new LoadHomePageAction();
    const expectedAction = new LoadHomePageMapSuccessAction(mapEntries);

    actions = hot('--a', { a: action });

    expect(effects.loadHomePageMap$).toBeObservable(cold('---b', { b: expectedAction }));
    expect(portfolioServiceSpy.getHomePageMap).toHaveBeenCalled();
  });

  it('should dispatch load home page map failure when there is an error', () => {
    portfolioServiceSpy.getHomePageMap.and.returnValue(cold('-#', undefined, { error: 'Error' }));

    actions = hot('-a', { a: new LoadHomePageAction() });

    expect(effects.loadHomePageMap$).toBeObservable(
      cold('--(b|)', { b: new LoadHomePageMapFailureAction({ error: 'Error' }) })
    );
  });

  it('should handle load home page map failure', () => {
    const action = new LoadHomePageMapFailureAction({ error: 'Error' });

    actions = hot('--a', { a: action });

    expect(effects.loadHomePageMapFailure$).toBeObservable(cold('--b', { b: action }));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/error']);
  });
});
