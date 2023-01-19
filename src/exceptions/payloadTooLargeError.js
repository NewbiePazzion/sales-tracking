import httpStatus from 'http-status';

import APIError from './apiError';
import { LOG_LEVEL_WARN } from '../fixtures/log';
import { PAYLOAD_TOO_LARGE_ERROR } from './exceptions.constants';

/**
 * Class representing a Payload Too Large error.
 * @extends APIError
 */
class PayloadTooLargeError extends APIError {
  /**
   * Creates a Payload Too Large error.
   *
   * @param {Object} data Error data.
   * @param {Object} [errorTmpl=PAYLOAD_TOO_LARGE_ERROR] Error template.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, errorTmpl = PAYLOAD_TOO_LARGE_ERROR, logging = true) {
    super({
      message: errorTmpl.DESCRIPTION,
      errors: [],
      stack: null,
      errorName: errorTmpl.LABEL,
      code: errorTmpl.ERROR,
      status: httpStatus.REQUEST_ENTITY_TOO_LARGE,
      severity: LOG_LEVEL_WARN,
    });

    if (logging) this.logger.logWarn(errorTmpl, data);
  }
}

export default PayloadTooLargeError;
