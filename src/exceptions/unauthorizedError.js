import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_WARN } from '../fixtures/log';
import { UNAUTHORIZED_ERROR } from './exceptions.constants';

/**
 * Class representing an Unauthorized error.
 * @extends APIError
 */
class UnauthorizedError extends APIError {
  /**
   * Creates an Unauthorized error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=UNAUTHORIZED_ERROR] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = UNAUTHORIZED_ERROR, logging = true) {
    super({
      message: data.errorMessage || errorTmpl.DESCRIPTION,
      errors: [data.error],
      stack: data.error ? data.error.stack : null,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.UNAUTHORIZED,
      severity: LOG_LEVEL_WARN,
    });

    if (logging) this.logger.logWarn(errorTmpl, data);
  }
}

export default UnauthorizedError;
