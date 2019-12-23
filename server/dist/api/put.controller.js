"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_controller_1 = require("./common.controller");
const logger_config_1 = require("../config/logger.config");
const redux_mock_1 = require("../store/redux.mock");
const action_types_mock_1 = require("../store/action-types.mock");
const updateHomePageTitle = app => app.put('/home-page-title', common_controller_1.putAndPostRoute(body => {
    logger_config_1.logger.info('Update home page title');
    redux_mock_1.mockStore.dispatch({
        type: action_types_mock_1.ActionTypes.MOCK_UPDATE_TITLE,
        payload: body.title
    });
}));
exports.activatePutRoutes = (app) => {
    updateHomePageTitle(app);
};
//# sourceMappingURL=put.controller.js.map