import { AppState } from '../../../app.ngrx';
import { createSelector } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { completeExperiencesLogoWithUrl } from '../../../helpers/image-path.helpers';

export interface State {
  experiences: Experience[];
}

export const InitialState: State = {
  experiences: []
};

const experienceState = (state: AppState): State => state.experiences;

export const selectExperiences = createSelector(
  experienceState,
  (state: State): Experience[] => completeExperiencesLogoWithUrl(state.experiences, environment.homeUrl)
);
