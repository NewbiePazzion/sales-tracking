import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_ERROR } from '../fixtures/log';
import { BAD_REQUEST_ERROR } from './exceptions.constants';

/**
 * Class representing an Bad Request error.
 * @extends APIError
 */
class BadRequestError extends APIError {
  /**
   * Creates an Bad Request error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=BAD_REQUEST_ERROR] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = BAD_REQUEST_ERROR, logging = true) {
    super({
      message: data.errorMessage || errorTmpl.DESCRIPTION,
      errors: [data.error],
      stack: data.error ? data.error.stack : null,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.BAD_REQUEST,
      severity: LOG_LEVEL_ERROR,
    });

    if (logging) this.logger.logError(errorTmpl, data);
  }
}

export default BadRequestError;
