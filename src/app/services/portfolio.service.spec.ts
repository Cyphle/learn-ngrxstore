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
});
