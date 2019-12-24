import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.ngrx';
import { cold } from 'jasmine-marbles';
import { NEVER } from 'rxjs';
import { ExperiencesComponent } from './experiences.component';
import { selectExperiences } from '../../store';
import { ExperienceComponent } from '../experience/experience.component';

describe('app/modules/experiences/components/experiences/experiences.component', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;
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
    TestBed.configureTestingModule({
      declarations: [
        ExperiencesComponent,
        ExperienceComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ]
    });

    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component with data', () => {
    storeSpy.select.and.callFake(selector => {
      switch (selector) {
        case selectExperiences:
          return cold('a', { a: experiences });
        default:
          return NEVER;
      }
    });

    component.ngOnInit();

    expect(component.experiences$).toBeObservable(cold('a', { a: experiences }));
  });
});
