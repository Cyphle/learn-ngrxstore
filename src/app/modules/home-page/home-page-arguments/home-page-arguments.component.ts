import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../app.ngrx';
import { selectHomePageArguments } from '../store';

@Component({
  selector: 'app-home-page-arguments',
  templateUrl: './home-page-arguments.component.html',
  styleUrls: ['./home-page-arguments.component.scss']
})
export class HomePageArgumentsComponent implements OnInit {
  public arguments$: Observable<Argument[][]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.arguments$ = this.store.select(selectHomePageArguments);
  }
}
