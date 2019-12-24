import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { HomePageMapComponent } from './home-page-map.component';
import { RouterModule } from '@angular/router';
import { AppState } from '../../../app.ngrx';

describe('app/modules/home-page/components/home-page-map/home-page-map.component', () => {
  let component: HomePageMapComponent;
  let fixture: ComponentFixture<HomePageMapComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageMapComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: storeSpy
        }
      ],
      imports: [
        RouterModule
      ]
    });

    fixture = TestBed.createComponent(HomePageMapComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
