import { Router } from 'express';

import { VisitTrack } from '../../models';
import VisitTrackController from '../../api/visitTrack';
import VisitTrackService from '../../services/visitTrackService';
import { API_VISIT_TRACK } from '../../fixtures/api';

const routes = Router();
const visitTrackService = VisitTrackService({ VisitTrack });
const controller = VisitTrackController({ visitTrackService });

routes
  .route(API_VISIT_TRACK)
  // .get(passport.authenticate('jwt', { session: false }), controller.getAll);
  .get(controller.getAll);

routes
  .route(API_VISIT_TRACK)
  .post(controller.create);

export default routes;
