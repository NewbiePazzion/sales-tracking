import { Router } from 'express';

import { LocationType } from '../../models';
import LocationTypeController from '../../api/locationType';
import LocationTypeService from '../../services/locationTypeService';
import { API_LOCATION_TYPE } from '../../fixtures/api';

const routes = Router();
const locationTypeService = LocationTypeService({ LocationType });
const controller = LocationTypeController({ locationTypeService });

routes
  .route(API_LOCATION_TYPE)
  .get(controller.getAll);

export default routes;
