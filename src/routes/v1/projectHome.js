import { Router } from 'express';

import { ProjectHome } from '../../models';
import ProjectHomeController from '../../api/projectHome';
import ProjectHomeService from '../../services/projectHomeService';
import { API_PROJECT_HOME } from '../../fixtures/api';

const routes = Router();
const projectHomeService = ProjectHomeService({ ProjectHome });
const controller = ProjectHomeController({ projectHomeService });

routes
  .route(API_PROJECT_HOME)
  .get(controller.getAll);

export default routes;
