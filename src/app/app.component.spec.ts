import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { selectFirstname, selectLastname, selectLogo } from './shared/header/store';
import { cold } from 'jasmine-marbles';
import { NEVER } from 'rxjs';
import { Store } from '@ngrx/store';
import { FooterComponent } from './shared/footer/component/footer.component';
import { HeaderComponent } from './shared/header/component/header.component';
import { AppState } from './app.ngrx';

describe('AppComponent', () => {
  let storeSpy: jasmine.SpyObj<Store<AppState>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ]
    }).compileComponents();

    storeSpy = TestBed.get(Store);

    storeSpy.select.and.callFake(selector => {
      switch (selector) {
        case selectFirstname:
          return cold('a', { a: 'Cyril' });
        case selectLastname:
          return cold('a', { a: 'PHAM-LE' });
        case selectLogo:
          return cold('a', { a: '/assets/logo.png' });
        default:
          return NEVER;
      }
    });
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'learn-ngrxstore'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('learn-ngrxstore');
  });
});
