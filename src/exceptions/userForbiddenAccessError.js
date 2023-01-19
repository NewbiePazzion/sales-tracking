import ForbiddenError from './forbiddenError';
import { USER_FORBIDDEN_ACCESS } from './exceptions.constants';

/**
 * Class representing a User Forbidden Access error.
 * @extends ForbiddenError
 */
class UserForbiddenAccessError extends ForbiddenError {
  /**
   * Creates a User Forbidden Access error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  /* istanbul ignore next */
  constructor(data, logging = true) {
    super(data, USER_FORBIDDEN_ACCESS, logging);
  }
}

export default UserForbiddenAccessError;
