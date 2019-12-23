import { putAndPostRoute } from './common.controller';
import { logger } from '../config/logger.config';
import { mockStore as store } from '../store/redux.mock';
import { ActionTypes } from '../store/action-types.mock';

const updateHomePageTitle = app =>
  app.put('/home-page-title', putAndPostRoute(body => {
    logger.info('Update home page title');

    store.dispatch({
      type: ActionTypes.MOCK_UPDATE_TITLE,
      payload: body.title
    });
  }));

export const activatePutRoutes = (app: any) => {
  updateHomePageTitle(app);
};
