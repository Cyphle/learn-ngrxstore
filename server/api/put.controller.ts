import { putAndPostRoute } from './common.controller';
import { logger } from '../config/logger.config';
import { mockStore as store } from '../store/redux.mock';
import { ActionTypes } from '../store/action-types.mock';
import { config } from '../config/application.config';

const updateHomePageTitle = app =>
  app.put(`${config.get('BASE_URL')}/home-page-title`, putAndPostRoute(body => {
    logger.info('Update home page title');

    store.dispatch({
      type: ActionTypes.MOCK_UPDATE_TITLE,
      payload: body.title
    });
  }));

const updateExperience = app =>
  app.put(`${config.get('BASE_URL')}/experiences`, putAndPostRoute(body => {
    logger.info(`Update one experience: ${JSON.stringify(body)}`);

    store.dispatch({
      type: ActionTypes.MOCK_UPDATE_EXPERIENCE,
      payload: body
    });
  }));

export const activatePutRoutes = (app: any) => {
  updateHomePageTitle(app);
  updateExperience(app);
};
