import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { HomePageArgumentComponent } from './home-page-argument.component';
import { AppState } from '../../../app.ngrx';

describe('app/modules/home-page/components/home-page-argument/home-page-argument.component', () => {
  let component: HomePageArgumentComponent;
  let fixture: ComponentFixture<HomePageArgumentComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageArgumentComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ]
    });

    fixture = TestBed.createComponent(HomePageArgumentComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
