import { Router } from 'express';

import DocsController from '../../api/docs';
import { API_DOCS_SWAGGER } from '../../fixtures/api';

const routes = Router();
const controller = DocsController({});

routes
  .route(API_DOCS_SWAGGER)
  /**
   * @swagger
   * /api/docs:
   *   get:
   *     tags:
   *       - 'Documentation'
   *     description: Generate swagger.json based on JS Doc
   *     responses:
   *       200:
   *         description: A JSON swagger document
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   */
  .get(controller.generate);

export default routes;
