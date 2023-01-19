import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_ERROR } from '../fixtures/log';
import { AUTH_ERROR } from './exceptions.constants';

/**
 * Class representing an Authentication error.
 * @extends APIError
 */
class AuthError extends APIError {
  /**
   * Creates an Authentication error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=AUTH_ERROR] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = AUTH_ERROR, logging = true) {
    super({
      message: errorTmpl.DESCRIPTION,
      errors: [data.error],
      stack: data.error.stack,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.INTERNAL_SERVER_ERROR,
      severity: LOG_LEVEL_ERROR,
    });

    if (logging) this.logger.logError(errorTmpl, data);
  }
}

export default AuthError;
