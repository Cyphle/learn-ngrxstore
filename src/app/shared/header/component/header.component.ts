import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.ngrx';
import { selectFirstname, selectLastname, selectLogo } from '../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public lastname$: Observable<string>;
  public firstname$: Observable<string>;
  public logo$: Observable<string>;
  public responsive = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.lastname$ = this.store.select(selectLastname);
    this.firstname$ = this.store.select(selectFirstname);
    this.logo$ = this.store.select(selectLogo);
  }

  showHideMenu(): void {
    this.responsive = !this.responsive;
  }

  hideMenu(): void {
    this.responsive = false;
  }
}
