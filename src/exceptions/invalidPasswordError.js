import UnauthorizedError from './unauthorizedError';
import { INVALID_PASSWORD } from './exceptions.constants';

/**
 * Class representing a Invalid Password error.
 * @extends UnauthorizedError
 */
class InvalidPasswordError extends UnauthorizedError {
  /**
   * Creates a Invalid Password error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  /* istanbul ignore next */
  constructor(data, logging = true) {
    super(data, INVALID_PASSWORD, logging);
  }
}

export default InvalidPasswordError;
