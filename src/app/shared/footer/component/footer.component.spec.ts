import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.ngrx';
import { selectFirstname, selectLastname, selectLogo } from '../../header/store';
import { cold } from 'jasmine-marbles';
import { NEVER } from 'rxjs';

describe('src/app/shared/footer/footer.component', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ]
    });

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);

    storeSpy.select.and.callFake(selector => selector === selectLogo
      ? cold('a', { a: '/assets/logo.png' })
      : NEVER
    );
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
