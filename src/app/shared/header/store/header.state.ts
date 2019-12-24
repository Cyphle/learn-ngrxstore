import { AppState } from '../../../app.ngrx';
import { createSelector } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export interface State {
  logo: string;
  firstname: string;
  lastname: string;
}

export const InitialState: State = {
  logo: '',
  firstname: '',
  lastname: ''
};

const headerState = (state: AppState): State => state.header;

export const selectFirstname = createSelector(headerState, (state: State): string => state.firstname);
export const selectLastname = createSelector(headerState, (state: State): string => state.lastname);
export const selectLogo = createSelector(headerState, (state: State): string => `${environment.homeUrl}${state.logo}`);
