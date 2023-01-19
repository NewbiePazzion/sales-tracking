import PayloadTooLargeError from './payloadTooLargeError';
import { CUSTOMER_NRIC_TOO_LARGE_ERROR } from './exceptions.constants';

/**
 * Class representing a Customer NRIC Too Large error.
 * @extends PayloadTooLargeError
 */
class CustomerNricTooLargeError extends PayloadTooLargeError {
  /**
   * Creates a Customer NRIC Image Too Large error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, CUSTOMER_NRIC_TOO_LARGE_ERROR, logging);
  }
}

export default CustomerNricTooLargeError;
