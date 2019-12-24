import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.ngrx';
import { UpdateExperienceAction } from '../../store/experiences.actions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('app/modules/experiences/components/experience/experience.component', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExperienceComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    });

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action when validating change', () => {
    component.experience = {
      company: 'La Combe Du Lion Vert',
      logo: '/assets/lacombelogo.png',
      job: 'Software Craftsman Full Stack',
      description: 'Blabla',
      startDate: '2017-08-01',
      endDate: '2019-11-30'
    };
    fixture.detectChanges();
    component.updatedDescription.setValue('new description');

    fixture.detectChanges();
    component.onValidate();

    expect(storeSpy.dispatch).toHaveBeenCalledWith(new UpdateExperienceAction({
      company: 'La Combe Du Lion Vert',
      logo: '/assets/lacombelogo.png',
      job: 'Software Craftsman Full Stack',
      description: 'new description',
      startDate: '2017-08-01',
      endDate: '2019-11-30'
    }));
  });
});
