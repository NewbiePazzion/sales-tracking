import UnauthorizedError from './unauthorizedError';
import { INVALID_CREDENTIALS } from './exceptions.constants';

/**
 * Class representing a Invalid Credentials error.
 * @extends UnauthorizedError
 */
class InvalidCredentialsError extends UnauthorizedError {
  /**
   * Creates a Invalid Credentials error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, INVALID_CREDENTIALS, logging);
  }
}

export default InvalidCredentialsError;
