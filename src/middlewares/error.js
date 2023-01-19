import lo from 'lodash';
import httpStatus from 'http-status';

import config from '../config';
import { loggerHelper } from '../utils';
import APIError from '../exceptions/apiError';
import { API_ERROR } from '../exceptions/exceptions.constants';
import { LOG_LEVEL_WARN, LOG_LEVEL_ERROR } from '../fixtures/log';

const { env } = config('/');
const logExceptKeys = ['password'];

/**
 * Error handler. Send stacktrace only during development
 *
 * @param {APIError} err Error of APIError
 * @param {Request} req HTTP Request
 * @param {Response} res HTTP Response
 *
 * @return {void}
 *
 */
const handler = (err, req, res) => {
  const response = {
    error: {
      code: err.code,
      message: err.message || httpStatus[err.status],
    },
  };

  // set errors to response in 422 HTTP status code only
  if (err.status === httpStatus.UNPROCESSABLE_ENTITY) {
    response.error.errors = err.errors;
  }

  // set stacktrace to response in development env
  if (env === 'dev') response.error.stack = err.stack;

  // get allowed body keys
  const bodyKeys = req.body ? Object.keys(req.body)
    .filter((k) => !logExceptKeys.includes(k)) : [];

  // log the error
  const errData = {
    errorName: err.name,
    request: JSON.stringify({
      url: req.originalUrl,
      method: req.originalMethod || req.method,
      body: req.body ? lo.pick(req.body, bodyKeys) : null,
    }),
  };

  const logger = loggerHelper();
  if (err.severity === LOG_LEVEL_WARN) logger.logWarn(API_ERROR, errData);
  else if (err.severity === LOG_LEVEL_ERROR) logger.logError(API_ERROR, errData);

  res.status(err.status).send(response);
};

/**
 * Convert error into APIError
 *
 * @param {Error} err Error
 * @param {Request} req HTTP Request
 * @param {Response} res HTTP Response
 * @param {Function} next Next function
 *
 * @return {void}
 *
 */
const converter = (err, req, res, next) => {
  let convertedError = err;

  if (!(err instanceof APIError)) {
    convertedError = new APIError({
      errorName: err.name,
      message: err.message,
      status: httpStatus.INTERNAL_SERVER_ERROR,
      stack: err.stack,
    });
  }

  handler(convertedError, req, res, next);
};

/**
 * Catch 404 and forward to error handler
 *
 * @param {Request} req HTTP Request
 * @param {Response} res HTTP Response
 * @param {Function} next Next function
 *
 * @return {void}
 *
 */
const notFound = (req, res, next) => {
  const err = new APIError({
    errorName: httpStatus['404_NAME'],
    message: 'Not found',
    status: httpStatus.NOT_FOUND,
    severity: LOG_LEVEL_WARN,
  });

  handler(err, req, res, next);
};

export default {
  handler,
  converter,
  notFound,
};
