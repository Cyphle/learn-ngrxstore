"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_1 = require("./config/express.config");
const get_controller_1 = require("./api/get.controller");
const application_config_1 = require("./config/application.config");
const logger_config_1 = require("./config/logger.config");
const database_service_1 = require("./database/database.service");
const post_controller_1 = require("./api/post.controller");
const put_controller_1 = require("./api/put.controller");
database_service_1.loadDatabase();
function launchServer() {
    const app = express_config_1.expressConfig();
    app.listen(application_config_1.config.get('PORT'), () => {
        logger_config_1.logger.info(`Server started on port ${application_config_1.config.get('PORT')}`);
        activateRoutes(app);
    });
}
function activateRoutes(app) {
    get_controller_1.activateGetRoutes(app);
    post_controller_1.activatePostRoutes(app);
    put_controller_1.activatePutRoutes(app);
}
launchServer();
//# sourceMappingURL=index.js.map