import { createContainer, asFunction, asValue, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';

import router from './router.js';
import server from './server.js';
import app from './app.js';

const container = createContainer();

container.register({
  router: asFunction(router),
  server: asClass(server),
  app: asClass(app),
  containerMiddleware: asValue(scopePerRequest(container))
});

await container.loadModules(
  [
    'src/controllers/*.js',
    'src/services/*.js',
    'src/repositories/*.js'
  ],
  {
    formatName: 'camelCase',
    esModules: true
  }
);

export default container;
