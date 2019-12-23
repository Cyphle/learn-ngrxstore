"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const action_types_mock_1 = require("../store/action-types.mock");
const redux_mock_1 = require("../store/redux.mock");
const logger_config_1 = require("../config/logger.config");
const baseFolderPath = path.join('..');
const readFolder = (filePath, readFileFn) => {
    fs.readdirSync(path.join(baseFolderPath, filePath))
        .forEach((file) => readFileFn(filePath, file));
};
const readFile = (filePath, filename) => {
    const payload = fs.readFileSync(path.join(baseFolderPath, filePath, filename), 'utf8');
    redux_mock_1.mockStore.dispatch({ type: action_types_mock_1.ActionTypes.MOCK_INIT_DATA, payload: { type: filename.split('.')[0], data: JSON.parse(payload) } });
};
exports.loadDatabase = () => {
    logger_config_1.logger.info('Initializing mock database');
    readFolder('data', readFile);
};
//# sourceMappingURL=database.service.js.map