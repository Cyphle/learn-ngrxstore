import { Action } from '@ngrx/store';

export const ExperiencesActionTypes = {
  LOAD_EXPERIENCES: '[Experiences] Load experiences',
  LOAD_EXPERIENCES_SUCCESS: '[Experiences] Load experiences success',
  LOAD_EXPERIENCES_FAILURE: '[Experiences] Load experiences failure',
  UPDATE_EXPERIENCE: '[Experience] Update experience',
  UPDATE_EXPERIENCE_SUCCESS: '[Experience] Update experience success',
  UPDATE_EXPERIENCE_FAILURE: '[Experience] Update experience failure',
};

export class UpdateExperienceAction implements Action {
  readonly type: string = ExperiencesActionTypes.UPDATE_EXPERIENCE;

  constructor(public payload: Experience) { }
}

export class UpdateExperienceSuccessAction implements Action {
  readonly type: string = ExperiencesActionTypes.UPDATE_EXPERIENCE_SUCCESS;

  constructor() { }
}

export class UpdateExperienceFailureAction implements Action {
  readonly type: string = ExperiencesActionTypes.UPDATE_EXPERIENCE_FAILURE;

  constructor(public payload?: ErrorResponse) { }
}

export class LoadExperiencesAction implements Action {
  readonly type: string = ExperiencesActionTypes.LOAD_EXPERIENCES;

  constructor() { }
}

export class LoadExperiencesSuccessAction implements Action {
  readonly type: string = ExperiencesActionTypes.LOAD_EXPERIENCES_SUCCESS;

  constructor(public payload: Experience[]) { }
}

export class LoadExperiencesFailureAction implements Action {
  readonly type: string = ExperiencesActionTypes.LOAD_EXPERIENCES_FAILURE;

  constructor(public payload?: ErrorResponse) { }
}
