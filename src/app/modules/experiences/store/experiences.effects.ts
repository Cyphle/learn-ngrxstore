import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.ngrx';

@Injectable()
export class ExperiencesEffects {
  constructor(private actions$: Actions,
              private store$: Store<AppState>) {
  }
}
