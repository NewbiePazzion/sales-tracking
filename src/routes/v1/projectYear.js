import { Router } from 'express';

import { ProjectYear } from '../../models';
import ProjectYearController from '../../api/projectYear';
import ProjectYearService from '../../services/projectYearService';
import { API_PROJECT_YEAR } from '../../fixtures/api';

const routes = Router();
const projectYearService = ProjectYearService({ ProjectYear });
const controller = ProjectYearController({ projectYearService });

routes
  .route(API_PROJECT_YEAR)
  .get(controller.getAll);

export default routes;
