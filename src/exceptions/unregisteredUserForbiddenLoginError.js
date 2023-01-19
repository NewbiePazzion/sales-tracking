import ForbiddenError from './forbiddenError';
import { UNREGISTERED_USER_FORBIDDEN_LOGIN } from './exceptions.constants';

/**
 * Class representing a Unregistered User Forbidden Login error.
 * @extends ForbiddenError
 */
class UnregisteredUserForbiddenLoginError extends ForbiddenError {
  /**
   * Creates a Unregistered User Forbidden Login error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  /* istanbul ignore next */
  constructor(data, logging = true) {
    super(data, UNREGISTERED_USER_FORBIDDEN_LOGIN, logging);
  }
}

export default UnregisteredUserForbiddenLoginError;
