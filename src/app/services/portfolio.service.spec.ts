import {} from 'jasmine';
import { PortfolioService } from './portfolio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('src/app/services/portfolio.service', () => {
  let service: PortfolioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PortfolioService]
    });
    service = TestBed.get(PortfolioService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get identity information', () => {
    const data = {
      firstname: 'Cyril',
      lastname: 'PHAM-LE',
      city: 'Paris',
      country: 'France',
      job: 'Fullstack Software Craftsman',
      logo: '/assets/logo.jpg',
      background: '/assets/homepage.jpg'
    };
    // when
    service.getIdentity().subscribe(identity => expect(identity).toEqual(data));

    // then
    const req = httpMock.expectOne('http://localhost:3000/rest/v1/identity');
    expect(req.request.method).toBe('GET');
    req.flush(data);
  });

  it('should get arguments information', () => {
    const data = [
      {
        picture: '../../../assets/dev-back.png',
        title: 'Développeur Back',
        content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
      },
      {
        picture: '../../../assets/dev-front.png',
        title: 'Développeur Front',
        content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
      }
    ];
    // when
    service.getArguments().subscribe(args => expect(args).toEqual(data));

    // then
    const req = httpMock.expectOne('http://localhost:3000/rest/v1/arguments');
    expect(req.request.method).toBe('GET');
    req.flush(data);
  });

  it('should get home page map information', () => {
    const data: HomePageMapEntry[] = [
      {
        path: '/about',
        picture: '../../../../../assets/philosophie.jpg',
        content: 'Ma philosophie, mes skills, ma formation et quelques docs'
      },
      {
        path: '/experience',
        picture: '../../../../../assets/experience.jpg',
        content: 'Mes expériences'
      },
      {
        path: '/art',
        picture: '../../../../../assets/passion.jpg',
        content: 'Mes passions : le dessin et la photo'
      }
    ];
    // when
    service.getHomePageMap().subscribe(entries => expect(entries).toEqual(data));

    // then
    const req = httpMock.expectOne('http://localhost:3000/rest/v1/home-page-map');
    expect(req.request.method).toBe('GET');
    req.flush(data);
  });
});
