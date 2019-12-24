import { mockStore as store } from '../store/redux.mock';
import { delay } from './common.controller';
import { config } from '../config/application.config';
import { logger } from '../config/logger.config';

export const getIdentityRoute = app =>
  app.get(`${ config.get('BASE_URL') }/identity`, (req, res) => {
    delay(() => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send(store.select((state: any) => state.identity));
    });
  });

export const getArgumentsRoute = app =>
  app.get(`${ config.get('BASE_URL') }/arguments`, (req, res) => {
    delay(() => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send(store.select((state: any) => state.arguments));
    });
  });

export const getHomePageMapRoute = app =>
  app.get(`${ config.get('BASE_URL') }/home-page-map`, (req, res) => {
    delay(() => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send(store.select((state: any) => state.homepagemap));
    });
  });

export const getProjectsRoute = app =>
  app.get(`${ config.get('BASE_URL') }/projects`, (req, res) => {
    delay(() => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send(store.select((state: any) => state.projects));
    });
  });

const getExperiencesData = (req, res) => {
  delay(() => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.send(store.select((state: any) => state.experiences));
  });
};

export const getExperiencesRoute = app => {
  logger.info(`Getting experiences ${ JSON.stringify(store.select((state: any) => state.experiences)) }`);
  return app.get(`${ config.get('BASE_URL') }/experiences`, getExperiencesData);
};

export const getHomePageTitle = app =>
  app.get(`${ config.get('BASE_URL') }/title`, (req, res) => {
    delay(() => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send({ title: store.select((state: any) => state.identity.title) });
    });
  });

export const getHomePageContent = app =>
  app.get(`${ config.get('BASE_URL') }/content`, (req, res) => {
    delay(() => {
      res.status(200);
      res.set('Content-Type', 'application/json');
      res.send({ content: store.select((state: any) => state.identity.content) });
    });
  });

export const activateGetRoutes = (app: any): void => {
  getProjectsRoute(app);
  getIdentityRoute(app);
  getExperiencesRoute(app);
  getHomePageTitle(app);
  getHomePageContent(app);
  getArgumentsRoute(app);
  getHomePageMapRoute(app);
};
