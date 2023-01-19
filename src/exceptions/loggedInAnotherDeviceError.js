import UnauthorizedError from './unauthorizedError';
import { LOGGED_IN_ANOTHER_DEVICE_ERROR } from './exceptions.constants';

/**
 * Class representing a Unauthorized error.
 * @extends UnauthorizedError
 */
class LoggedInAnotherDeviceError extends UnauthorizedError {
  /**
   * Creates a Logged in Another Device error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data = {}, logging = true) {
    super(data, LOGGED_IN_ANOTHER_DEVICE_ERROR, logging);
  }
}

export default LoggedInAnotherDeviceError;
