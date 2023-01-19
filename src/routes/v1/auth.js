import { Router } from 'express';

import AuthController from '../../api/auth';
import AuthService from '../../services/authService';
import { User } from '../../models';
import { API_AUTH_LOGIN, API_AUTH_REFRESH_TOKEN } from '../../fixtures/api';

const routes = Router();
const authService = AuthService({ User });
const controller = AuthController({ authService });

routes
  .route(API_AUTH_LOGIN)
  /**
   * @swagger
   * /api/auth/login:
   *   post:
   *     tags:
   *       - '# Auth'
   *     requestBody:
   *         description: Auth object
   *         required: true
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 username:
   *                   type: string
   *                 password:
   *                   type: string
   *                 domain:
   *                   type: string
   *     summary: Login
   *     description: Login
   *     responses:
   *       200:
   *         description: An object of token and refresh token
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   *                 refresh_token:
   *                   type: string
   *       401:
   *         $ref: '#/components/responses/UnauthorizedError'
   */
  .post(controller.login);

routes
  .route(API_AUTH_REFRESH_TOKEN)
  /**
   * @swagger
   * /api/auth/refresh-token:
   *   get:
   *     tags:
   *       - '# Auth'
   *     parameters:
   *       - in: query
   *         name: refresh_token
   *         schema:
   *           type: string
   *         description: JWT Refresh token
   *     summary: Get JWT access token based on refresh token
   *     description: Returns JWT access token when refresh token is valid.
   *     responses:
   *       200:
   *         description: An object of JWT token (acces token only)
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   *       401:
   *         $ref: '#/components/responses/UnauthorizedError'
   */
  .get(controller.refreshToken);

export default routes;
