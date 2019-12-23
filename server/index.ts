import { expressConfig } from './config/express.config';
import { activateGetRoutes } from './api/get.controller';
import { config } from './config/application.config';
import { logger } from './config/logger.config';
import { loadDatabase } from './database/database.service';
import { activatePostRoutes } from './api/post.controller';
import { activatePutRoutes } from './api/put.controller';

loadDatabase();

function launchServer() {
  const app = expressConfig();
  app.listen(config.get('PORT'), () => {
    logger.info(`Server started on port ${ config.get('PORT') }`);
    activateRoutes(app);
  });
}

function activateRoutes(app: any) {
  activateGetRoutes(app);
  activatePostRoutes(app);
  activatePutRoutes(app);
}

launchServer();
