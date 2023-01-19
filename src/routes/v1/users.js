import { Router } from 'express';

import UsersController from '../../api/users';
import UserService from '../../services/usersService';
import { User } from '../../models';
import { API_USERS } from '../../fixtures/api';

const routes = Router();
const userService = UserService({ User });
const controller = UsersController({ userService });

routes
  .route(API_USERS)
  .post(controller.create);

export default routes;
