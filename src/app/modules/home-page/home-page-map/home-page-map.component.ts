import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.ngrx';
import { selectHomePageMap } from '../store';

@Component({
  selector: 'app-home-page-map',
  templateUrl: './home-page-map.component.html',
  styleUrls: ['./home-page-map.component.scss']
})
export class HomePageMapComponent implements OnInit {
  public mapEntries$: Observable<HomePageMapEntry[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.mapEntries$ = this.store.select(selectHomePageMap);
  }
}
