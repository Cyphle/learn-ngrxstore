import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.ngrx';
import { selectLogo } from '../store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public logo$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.logo$ = this.store.select(selectLogo);
  }
}
