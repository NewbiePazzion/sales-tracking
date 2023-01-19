import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import routes from '../routes/v1';
import error from '../middlewares/error';
import Passport from '../providers/passport';
import { swaggerMiddleware, swaggerUIPath } from './swagger';

import config from '.';

const create = async () => {
  const { filesystems } = config('/');

  /**
  * Express instance
  * @public
  */

  const app = express();

  // request logging. dev: console | production: file
  if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));

  // lets you use HTTP verbs such as PUT or DELETE
  // in places where the client doesn't support it
  app.use(methodOverride());

  // parse body params and attache them to req.body
  app.use(bodyParser.json({ limit: '2mb' }));

  // support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));

  // enable CORS - Cross Origin Resource Sharing
  app.use(cors());

  // mount passport
  const passport = Passport();
  app.use(passport.init());

  app.use(express.static(filesystems.disks.public.root));

  // mount api v1 routes
  app.use('/api', routes);

  // mount documentation UI
  app.get('/', swaggerMiddleware);
  app.get('/index.html', swaggerMiddleware);
  app.use(express.static(swaggerUIPath));

  // if error is not an instanceOf APIError, convert it.
  app.use(error.converter);

  // catch 404 and forward to error handler
  app.use(error.notFound);

  // error handler, send stacktrace only during development
  app.use(error.handler);

  return app;
};

const server = { create };

export default server;
