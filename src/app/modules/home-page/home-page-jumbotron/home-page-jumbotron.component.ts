import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.ngrx';
import {
  selectHomePageBackground,
  selectHomePageCity,
  selectHomePageCountry,
  selectHomePageFirstname,
  selectHomePageJob,
  selectHomePageLastname
} from '../store';

@Component({
  selector: 'app-home-page-jumbotron',
  templateUrl: './home-page-jumbotron.component.html',
  styleUrls: ['./home-page-jumbotron.component.scss']
})
export class HomePageJumbotronComponent implements OnInit {
  public lastname$: Observable<string>;
  public firstname$: Observable<string>;
  public job$: Observable<string>;
  public city$: Observable<string>;
  public country$: Observable<string>;
  public background$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.lastname$ = this.store.select(selectHomePageLastname);
    this.firstname$ = this.store.select(selectHomePageFirstname);
    this.job$ = this.store.select(selectHomePageJob);
    this.city$ = this.store.select(selectHomePageCity);
    this.country$ = this.store.select(selectHomePageCountry);
    this.background$ = this.store.select(selectHomePageBackground);
  }
}
