import * as express from 'express';
import * as bodyParser from 'body-parser';
// @ts-ignore
import * as cors from 'cors';
import * as path from 'path';

export const expressConfig = () => {
  // @ts-ignore
  const app = express();
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use('/assets', express.static(path.join(__dirname, '../../assets')));
  app.use(cors());

  return app;
};
