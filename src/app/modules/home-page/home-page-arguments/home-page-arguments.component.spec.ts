import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { HomePageArgumentsComponent } from './home-page-arguments.component';
import { HomePageArgumentComponent } from '../home-page-argument/home-page-argument.component';
import { cold } from 'jasmine-marbles';
import { NEVER } from 'rxjs';
import { AppState } from '../../../app.ngrx';
import { selectHomePageArguments } from '../store';

describe('app/modules/home-page/components/home-page-arguments/home-page-arguments.component', () => {
  let component: HomePageArgumentsComponent;
  let fixture: ComponentFixture<HomePageArgumentsComponent>;
  let storeSpy: jasmine.SpyObj<Store<AppState>>;
  const args: Argument[][] = [
    [
      {
        picture: '../../../assets/dev-back.png',
        title: 'Développeur Back',
        content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
      },
      {
        picture: '../../../assets/dev-front.png',
        title: 'Développeur Front',
        content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
      },
      {
        picture: '../../../assets/craftsman.png',
        title: 'Software Craftsman',
        content: 'Je crois dur comme fer à la philosophie Craftsman pour la qualité de code et la valeur délivrée'
      }
    ],
    [
      {
        picture: '../../../assets/devops.png',
        title: 'DevOps',
        content: 'Je m\'intéresse aux problématiques DevOps avec Docker et Jenkins'
      },
      {
        picture: '../../../assets/dessin.png',
        title: 'Dessinateur',
        content: 'J\'adore le dessin'
      },
      {
        picture: '../../../assets/photo.png',
        title: 'Photographe',
        content: 'Et la photo'
      }
    ]
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageArgumentsComponent,
        HomePageArgumentComponent
      ],
      providers: [
        {
          provide: Store,
          useValue: jasmine.createSpyObj('Store', ['dispatch', 'select'])
        }
      ]
    });

    fixture = TestBed.createComponent(HomePageArgumentsComponent);
    component = fixture.componentInstance;
    storeSpy = TestBed.get(Store);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component with data', () => {
    storeSpy.select.and.callFake(selector => selectHomePageArguments ? cold('a', { a: args }) : NEVER);

    component.ngOnInit();

    expect(component.arguments$).toBeObservable(cold('a', { a: args }));
  });
});
