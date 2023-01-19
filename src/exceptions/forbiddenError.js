import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_WARN } from '../fixtures/log';
import { FORBIDDEN } from './exceptions.constants';

/**
 * Class representing a Forbidden error.
 * @extends APIError
 */
class ForbiddenError extends APIError {
  /**
   * Creates a Forbidden error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=FORBIDDEN] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = FORBIDDEN, logging = true) {
    super({
      message: data.errorMessage || errorTmpl.DESCRIPTION,
      errors: [],
      stack: null,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.FORBIDDEN,
      severity: LOG_LEVEL_WARN,
    });

    if (logging) this.logger.logWarn(errorTmpl, data);
  }
}

export default ForbiddenError;
