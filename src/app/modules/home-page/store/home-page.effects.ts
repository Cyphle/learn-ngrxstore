import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.ngrx';
import { PortfolioService } from '../../../services/portfolio.service';

@Injectable()
export class HomePageEffects {
  constructor(private actions$: Actions,
              private portfolioService: PortfolioService,
              private store$: Store<AppState>) {
  }

}
