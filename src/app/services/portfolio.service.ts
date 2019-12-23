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
}
