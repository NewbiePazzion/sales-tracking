import { Router } from 'express';

import { Location } from '../../models';
import LocationController from '../../api/location';
import LocationService from '../../services/locationService';
import { API_LOCATION } from '../../fixtures/api';

const routes = Router();
const locationService = LocationService({ Location });
const controller = LocationController({ locationService });

routes
  .route(API_LOCATION)
  // .get(passport.authenticate('jwt', { session: false }), controller.getAll);
  .get(controller.getAll);

export default routes;
