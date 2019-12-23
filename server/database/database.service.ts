import * as path from 'path';
import * as fs from 'fs';
import { ActionTypes } from '../store/action-types.mock';
import { mockStore as store } from '../store/redux.mock';
import { logger } from '../config/logger.config';

const baseFolderPath = path.join('..');

const readFolder = (filePath: string, readFileFn: (filePath: string, filename: string) => void): void => {
  fs.readdirSync(path.join(baseFolderPath, filePath))
    .forEach((file: string) => readFileFn(filePath, file));
};

const readFile = (filePath: string, filename: string): void => {
  const payload = fs.readFileSync(path.join(baseFolderPath, filePath, filename), 'utf8');
  store.dispatch({ type: ActionTypes.MOCK_INIT_DATA, payload: { type: filename.split('.')[0], data: JSON.parse(payload) }});
};

export const loadDatabase = (): void => {
  logger.info('Initializing mock database');
  readFolder('data', readFile);
};
