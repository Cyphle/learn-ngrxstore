"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_mock_1 = require("../store/redux.mock");
const common_controller_1 = require("./common.controller");
const application_config_1 = require("../config/application.config");
exports.getIdentityRoute = app => app.get(`${application_config_1.config.get('BASE_URL')}/identity`, common_controller_1.getRoute(redux_mock_1.mockStore.select((state) => state.identity)));
exports.getArgumentsRoute = app => app.get(`${application_config_1.config.get('BASE_URL')}/arguments`, common_controller_1.getRoute(redux_mock_1.mockStore.select((state) => state.arguments)));
exports.getHomePageMapRoute = app => app.get(`${application_config_1.config.get('BASE_URL')}/home-page-map`, common_controller_1.getRoute(redux_mock_1.mockStore.select((state) => state.homepagemap)));
exports.getProjectsRoute = app => app.get(`${application_config_1.config.get('BASE_URL')}/projects`, common_controller_1.getRoute(redux_mock_1.mockStore.select((state) => state.projects)));
exports.getExperiencesRoute = app => app.get(`${application_config_1.config.get('BASE_URL')}/experiences`, common_controller_1.getRoute(redux_mock_1.mockStore.select((state) => state.experiences)));
exports.getHomePageTitle = app => app.get(`${application_config_1.config.get('BASE_URL')}/title`, common_controller_1.getRoute({ title: redux_mock_1.mockStore.select((state) => state.identity.title) }));
exports.getHomePageContent = app => app.get(`${application_config_1.config.get('BASE_URL')}/content`, common_controller_1.getRoute({ content: redux_mock_1.mockStore.select((state) => state.identity.content) }));
exports.activateGetRoutes = (app) => {
    exports.getProjectsRoute(app);
    exports.getIdentityRoute(app);
    exports.getExperiencesRoute(app);
    exports.getHomePageTitle(app);
    exports.getHomePageContent(app);
    exports.getArgumentsRoute(app);
    exports.getHomePageMapRoute(app);
};
//# sourceMappingURL=get.controller.js.map