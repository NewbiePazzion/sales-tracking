import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_ERROR } from '../fixtures/log';
import { FILESYSTEM_ERROR } from './exceptions.constants';

/**
 * Class representing a Filesystem error.
 * @extends APIError
 */
class FilesystemError extends APIError {
  /**
   * Filesystem error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=FILESYSTEM_ERROR] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = FILESYSTEM_ERROR, logging = true) {
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

export default FilesystemError;
