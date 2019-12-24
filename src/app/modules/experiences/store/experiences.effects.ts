import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { PortfolioService } from '../../../services/portfolio.service';
import {
  ExperiencesActionTypes,
  LoadExperiencesAction,
  LoadExperiencesFailureAction,
  LoadExperiencesSuccessAction,
  UpdateExperienceAction,
  UpdateExperienceFailureAction,
  UpdateExperienceSuccessAction
} from './experiences.actions';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ExperiencesEffects {
  constructor(private actions$: Actions,
              private router: Router,
              private portfolioService: PortfolioService) {
  }

  @Effect() public loadExperiences$: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadExperiencesAction>(ExperiencesActionTypes.LOAD_EXPERIENCES),
      switchMap(() => this.portfolioService.getExperiences()),
      map((experiences: Experience[]) => new LoadExperiencesSuccessAction(experiences)),
      catchError((error: ErrorResponse) => of(new LoadExperiencesFailureAction(error)))
    );

  @Effect({ dispatch: false }) public loadExperiencesFailure: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadExperiencesFailureAction>(ExperiencesActionTypes.LOAD_EXPERIENCES_FAILURE),
      tap(() => this.router.navigate(['/error']))
    );

  // @Effect() public updateExperience$: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType<UpdateExperienceAction>(ExperiencesActionTypes.UPDATE_EXPERIENCE),
  //     switchMap((action: UpdateExperienceAction) => this.portfolioService.updateExperience(action.payload)),
  //     map(() => {
  //       console.log('coucou');
  //       return new UpdateExperienceSuccessAction();
  //     }),
  //     catchError((error: ErrorResponse) => of(new UpdateExperienceFailureAction(error)))
  //   );


  @Effect() public updateExperience$: Observable<Action> = this.actions$
    .pipe(
      ofType<UpdateExperienceAction>(ExperiencesActionTypes.UPDATE_EXPERIENCE),
      mergeMap((action: UpdateExperienceAction) =>
        this.portfolioService.updateExperience(action.payload).pipe(
          map<Experience, UpdateExperienceSuccessAction>((payload: Experience) =>
            new UpdateExperienceSuccessAction()
          ),
          catchError((error: ErrorResponse) => of(new UpdateExperienceFailureAction(error)))
        )
      )
    );

  @Effect() public updateExperienceSuccess$: Observable<Action> = this.actions$
    .pipe(
      ofType<UpdateExperienceSuccessAction>(ExperiencesActionTypes.UPDATE_EXPERIENCE_SUCCESS),
      map(() => new LoadExperiencesAction())
    );

  @Effect({ dispatch: false }) public updateExperiencesFailure$: Observable<Action> = this.actions$
    .pipe(
      ofType<UpdateExperienceFailureAction>(ExperiencesActionTypes.UPDATE_EXPERIENCE_FAILURE),
      tap(() => this.router.navigate(['/error']))
    );
}
