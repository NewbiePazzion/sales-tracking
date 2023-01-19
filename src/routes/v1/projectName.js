import { Router } from 'express';

import { ProjectName } from '../../models';
import ProjectNameController from '../../api/projectName';
import ProjectNameService from '../../services/projectNameService';
import { API_PROJECT_NAME } from '../../fixtures/api';

const routes = Router();
const projectNameService = ProjectNameService({ ProjectName });
const controller = ProjectNameController({ projectNameService });

routes
  .route(API_PROJECT_NAME)
  .get(controller.getAll);

export default routes;
