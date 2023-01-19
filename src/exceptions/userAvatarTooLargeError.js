import PayloadTooLargeError from './payloadTooLargeError';
import { USER_AVATAR_TOO_LARGE_ERROR } from './exceptions.constants';

/**
 * Class representing a User Avatar Too Large error.
 * @extends PayloadTooLargeError
 */
class UserAvatarTooLargeError extends PayloadTooLargeError {
  /**
   * Creates a User Avatar Too Large error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, USER_AVATAR_TOO_LARGE_ERROR, logging);
  }
}

export default UserAvatarTooLargeError;
