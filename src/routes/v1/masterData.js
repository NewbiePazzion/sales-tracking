import { Router } from 'express';

import { MasterActivity, MasterService, MasterProvider, MasterResult, MasterResident } from '../../models';
import MasterDataController from '../../api/masterData';
import MasterDataService from '../../services/masterDataService';
import { API_MASTER } from '../../fixtures/api';

const routes = Router();
const masterDataService = MasterDataService({ MasterActivity, MasterService, MasterProvider, MasterResult, MasterResident });
const controller = MasterDataController({ masterDataService });

routes
  .route(API_MASTER)
  .get(controller.getAll);

export default routes;
