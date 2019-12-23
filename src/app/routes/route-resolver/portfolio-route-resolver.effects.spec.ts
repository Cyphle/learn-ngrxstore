import { TestBed } from '@angular/core/testing';
import { PortfolioRouteResolverEffects } from './portfolio-route-resolver.effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import {
  LoadHomePageAction,
  LoadHomePageIdentityFailureAction,
  LoadHomePageIdentitySuccessAction
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
});
