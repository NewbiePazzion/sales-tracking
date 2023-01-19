import httpStatus from 'http-status';

import ExtendableError from './extendableError';
import { LOG_LEVEL_ERROR } from '../fixtures/log';

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   *
   * @param {string} message Error message.
   * @param {string} [errorName=''] Error name.
   * @param {number} [code=50000] Error code.
   * @param {number} [status=httpStatus.INTERNAL_SERVER_ERROR] HTTP status code of error.
   * @param {string} [severity=LOG_LEVEL_ERROR] Error severity.
   * @param {boolean} [isPublic=false] Whether the message should be visible to user or not.
   *
   */
  constructor({
    message,
    errors,
    stack,
    errorName = '',
    code = 50000,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    severity = LOG_LEVEL_ERROR,
    isPublic = false,
  }) {
    super({
      message,
      errors,
      code,
      status,
      severity,
      isPublic,
      stack,
    });
    if (errorName) this.name = errorName;
  }
}

export default APIError;
