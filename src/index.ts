import express from 'express';
import htmlRenderer from './htmlRenderer';

export default (
  html: string,
  paths: { buildPath: string, htmlPath: string },
  ): express.Application => {

  const app: express.Application = express();
  const router: express.Router = express.Router();

  router.use('^/$', htmlRenderer(html, paths.htmlPath));
  router.use(express.static(paths.buildPath, { maxAge: '1y' }));

  app.use(router);

  return app;
};
