import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cold } from 'jasmine-marbles';
import { NEVER } from 'rxjs';
import { HomePageJumbotronComponent } from './home-page-jumbotron.component';
import { AppState } from '../../../app.ngrx';
import { selectHomePageCity, selectHomePageCountry, selectHomePageFirstname, selectHomePageJob, selectHomePageLastname } from '../store';

describe('app/modules/home-page/components/home-page-jumbotron/home-page-jumbotron.component', () => {
  let component: HomePageJumbotronComponent;
  let fixture: ComponentFixture<HomePageJumbotronComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        HomePageJumbotronComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ]
    });

    fixture = TestBed.createComponent(HomePageJumbotronComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component with data', () => {
    storeSpy.select.and.callFake(selector => {
      switch (selector) {
        case selectHomePageFirstname:
          return cold('a', { a: 'Cyril' });
        case selectHomePageLastname:
          return cold('a', { a: 'PHAM-LE' });
        case selectHomePageJob:
          return cold('a', { a: 'Craftsman' });
        case selectHomePageCity:
          return cold('a', { a: 'Paris' });
        case selectHomePageCountry:
          return cold('a', { a: 'France' });
        default:
          return NEVER;
      }
    });

    component.ngOnInit();

    expect(component.firstname$).toBeObservable(cold('a', { a: 'Cyril' }));
    expect(component.lastname$).toBeObservable(cold('a', { a: 'PHAM-LE' }));
    expect(component.job$).toBeObservable(cold('a', { a: 'Craftsman' }));
    expect(component.city$).toBeObservable(cold('a', { a: 'Paris' }));
    expect(component.country$).toBeObservable(cold('a', { a: 'France' }));
  });
});
