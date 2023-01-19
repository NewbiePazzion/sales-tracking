import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_WARN } from '../fixtures/log';
import { EMPTY_RESULT } from './exceptions.constants';

/**
 * Class representing an Empty Result error.
 * @extends APIError
 */
class EmptyResultError extends APIError {
  /**
   * Creates an Empty Result error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=EMPTY_RESULT] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = EMPTY_RESULT, logging = true) {
    super({
      message: errorTmpl.DESCRIPTION,
      errors: [],
      stack: null,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.OK,
      severity: LOG_LEVEL_WARN,
    });

    if (logging) this.logger.logWarn(errorTmpl, data);
  }
}

export default EmptyResultError;
