import { Router } from 'express';
import { API_STATUS } from '../../fixtures/api';

import docs from './docs';
import authRoutes from './auth';
import userRoutes from './user';
import locationRoutes from './location';
import projectYearRoutes from './projectYear';
import locationTypeRoutes from './locationType';
import projectNameRoutes from './projectName';
import projectHomeRoutes from './projectHome';
import masterDataRoutes from './masterData';
import visitTrackRoutes from './visitTrack';
// import JwtAuthMiddleware from '../../middlewares/jwtAuth';

// API ROUTER
const apiRouter = Router();

// apiRouter.use(JwtAuthMiddleware('jwt'));

// APP ROUTER
const router = Router();

router.get(API_STATUS, (req, res) => res.send('OK'));

router.use(docs);
router.use(authRoutes);
router.use(apiRouter);
router.use(userRoutes);
router.use(locationRoutes);
router.use(projectYearRoutes);
router.use(locationTypeRoutes);
router.use(projectNameRoutes);
router.use(projectHomeRoutes);
router.use(masterDataRoutes);
router.use(visitTrackRoutes);
// ? All routers that put here will be protected by JWT auth middleware from `apiRouter`

export default router;
