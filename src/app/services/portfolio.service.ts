import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const homeRestPath = '/rest/v1';

@Injectable()
export class PortfolioService {
  constructor(private http: HttpClient) {
  }

  public getIdentity = (): Observable<Identity> =>
    this.http.get<Identity>(`${environment.homeUrl}${homeRestPath}/identity`)

  public getArguments = (): Observable<Argument[]> =>
    this.http.get<Argument[]>(`${environment.homeUrl}${homeRestPath}/arguments`)

  public getHomePageMap = (): Observable<HomePageMapEntry[]> =>
    this.http.get<HomePageMapEntry[]>(`${environment.homeUrl}${homeRestPath}/home-page-map`)

  public getExperiences = (): Observable<Experience[]> =>
    this.http.get<Experience[]>(`${environment.homeUrl}${homeRestPath}/experiences`)
}
