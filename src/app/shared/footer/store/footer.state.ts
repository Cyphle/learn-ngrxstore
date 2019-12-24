import { AppState } from '../../../app.ngrx';
import { createSelector } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export interface State {
  logo: string;
}

export const InitialState: State = {
  logo: '',
};

const footerState = (state: AppState): State => state.footer;

export const selectLogo = createSelector(footerState, (state: State): string => `${environment.homeUrl}${state.logo}`);
