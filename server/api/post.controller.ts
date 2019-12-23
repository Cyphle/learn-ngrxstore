import { logger } from '../config/logger.config';
import { ActionTypes } from '../store/action-types.mock';
import { mockStore as store } from '../store/redux.mock';
import { putAndPostRoute } from './common.controller';

const addProjectRoute = app =>
  app.post('/projects', putAndPostRoute(body => {
    logger.info('Adding project');

    store.dispatch({
      type: ActionTypes.MOCK_ADD_PROJECT,
      payload: body.project
    });
  }));

export const activatePostRoutes = (app: any) => {
  addProjectRoute(app);
};
