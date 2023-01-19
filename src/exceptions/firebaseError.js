import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_ERROR } from '../fixtures/log';
import { FIREBASE_ERROR } from './exceptions.constants';

/**
 * Class representing a Firebase error.
 * @extends APIError
 */
class FirebaseError extends APIError {
  /**
   * Creates a Firebase error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=FIREBASE_ERROR] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = FIREBASE_ERROR, logging = true) {
    super({
      message: errorTmpl.DESCRIPTION,
      errors: [data.error],
      stack: data.error ? data.error.stack : null,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.INTERNAL_SERVER_ERROR,
      severity: LOG_LEVEL_ERROR,
    });

    if (logging) this.logger.logError(errorTmpl, data);
  }
}

export default FirebaseError;
