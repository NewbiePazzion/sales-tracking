import { Router } from 'express';

import { User } from '../../models';
import UserController from '../../api/user';
import UserService from '../../services/userService';
import { API_USERS, API_USERS_WITH_ID } from '../../fixtures/api';

const routes = Router();
const userService = UserService({ User });
const controller = UserController({ userService });

routes
  .route(API_USERS)
  // .get(passport.authenticate('jwt', { session: false }), controller.getAll);
  .get(controller.getAll);

routes
  .route(API_USERS)
  .post(controller.create);

routes
  .route(API_USERS_WITH_ID)
  .put(controller.update);

routes
  .route(API_USERS_WITH_ID)
  .delete(controller.remove);

export default routes;
