import { AppState } from '../../../app.ngrx';
import { createSelector } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { splitArrayInEqualSizeOf } from '../../../helpers/split.helpers';
import { completeArgumentsPictureWithUrl, completeHomePageMapEntriesPictureWithUrl } from '../../../helpers/image-path.helpers';

export interface State {
  identity: Identity;
  arguments: Argument[];
  mapEntries: HomePageMapEntry[];
}

export const InitialState: State = {
  identity: {
    firstname: '',
    lastname: '',
    city: '',
    country: '',
    job: '',
    logo: '',
    background: ''
  },
  arguments: [],
  mapEntries: []
};

const homePageState = (state: AppState): State => state.homePage;

export const selectHomePageFirstname = createSelector(homePageState, (state: State): string => state.identity.firstname);
export const selectHomePageLastname = createSelector(homePageState, (state: State): string => state.identity.lastname);
export const selectHomePageCity = createSelector(homePageState, (state: State): string => state.identity.city);
export const selectHomePageCountry = createSelector(homePageState, (state: State): string => state.identity.country);
export const selectHomePageJob = createSelector(homePageState, (state: State): string => state.identity.job);
export const selectHomePageLogo =
  createSelector(homePageState, (state: State): string => `${environment.homeUrl}${state.identity.logo}`);
export const selectHomePageBackground =
  createSelector(homePageState, (state: State): string => `${environment.homeUrl}${state.identity.background}`);
export const selectHomePageArguments = createSelector(
  homePageState,
  (state: State): Argument[][] => splitArrayInEqualSizeOf(completeArgumentsPictureWithUrl(state.arguments, environment.homeUrl), 3)
);
export const selectHomePageMap = createSelector(
  homePageState,
  (state: State): HomePageMapEntry[] => completeHomePageMapEntriesPictureWithUrl(state.mapEntries, environment.homeUrl)
);
