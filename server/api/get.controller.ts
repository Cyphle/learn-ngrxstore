import { mockStore as store } from '../store/redux.mock';
import { getRoute } from './common.controller';
import { config } from '../config/application.config';

export const getIdentityRoute = app =>
  app.get(`${config.get('BASE_URL')}/identity`, getRoute(store.select((state: any) => state.identity)));

export const getArgumentsRoute = app =>
  app.get(`${config.get('BASE_URL')}/arguments`, getRoute(store.select((state: any) => state.arguments)));

export const getHomePageMapRoute = app =>
  app.get(`${config.get('BASE_URL')}/home-page-map`, getRoute(store.select((state: any) => state.homepagemap)));

export const getProjectsRoute = app =>
  app.get(`${config.get('BASE_URL')}/projects`, getRoute(store.select((state: any) => state.projects)));

export const getExperiencesRoute = app =>
  app.get(`${config.get('BASE_URL')}/experiences`, getRoute(store.select((state: any) => state.experiences)));

export const getHomePageTitle = app =>
  app.get(`${config.get('BASE_URL')}/title`, getRoute({ title: store.select((state: any) => state.identity.title) }));

export const getHomePageContent = app =>
  app.get(`${config.get('BASE_URL')}/content`, getRoute({ content: store.select((state: any) => state.identity.content) }));

export const activateGetRoutes = (app: any): void => {
  getProjectsRoute(app);
  getIdentityRoute(app);
  getExperiencesRoute(app);
  getHomePageTitle(app);
  getHomePageContent(app);
  getArgumentsRoute(app);
  getHomePageMapRoute(app);
};
