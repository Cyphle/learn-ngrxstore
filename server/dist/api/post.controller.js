"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_config_1 = require("../config/logger.config");
const action_types_mock_1 = require("../store/action-types.mock");
const redux_mock_1 = require("../store/redux.mock");
const common_controller_1 = require("./common.controller");
const addProjectRoute = app => app.post('/projects', common_controller_1.putAndPostRoute(body => {
    logger_config_1.logger.info('Adding project');
    redux_mock_1.mockStore.dispatch({
        type: action_types_mock_1.ActionTypes.MOCK_ADD_PROJECT,
        payload: body.project
    });
}));
exports.activatePostRoutes = (app) => {
    addProjectRoute(app);
};
//# sourceMappingURL=post.controller.js.map