import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_WARN } from '../fixtures/log';
import { VALIDATION_ERROR } from './exceptions.constants';

/**
 * Class representing a Validation error.
 * @extends APIError
 */
class ValidationError extends APIError {
  /**
   * Creates a Validation error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=VALIDATION_ERROR] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = VALIDATION_ERROR, logging = true) {
    let err = null;
    if (data.error) {
      err = data.error.isJoi ? data.error.details : data.error.errors;
    }
    super({
      message: data.errorMessage || errorTmpl.DESCRIPTION,
      errors: err,
      stack: data.error ? data.error.stack : null,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.UNPROCESSABLE_ENTITY,
      severity: LOG_LEVEL_WARN,
    });

    if (logging) this.logger.logWarn(errorTmpl, data);
  }
}

export default ValidationError;
