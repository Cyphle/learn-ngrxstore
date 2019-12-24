import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { cold } from 'jasmine-marbles';
import { NEVER } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.ngrx';
import { selectFirstname, selectLastname, selectLogo } from '../store';

describe('src/app/shared/header/header.component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Portfolio de ');
  });

  it('should initialize component with data', () => {
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

    component.ngOnInit();

    expect(component.firstname$).toBeObservable(cold('a', { a: 'Cyril' }));
    expect(component.lastname$).toBeObservable(cold('a', { a: 'PHAM-LE' }));
    expect(component.logo$).toBeObservable(cold('a', { a: '/assets/logo.png' }));
  });
});
