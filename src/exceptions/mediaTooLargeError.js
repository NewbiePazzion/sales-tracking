import PayloadTooLargeError from './payloadTooLargeError';
import { MEDIA_TOO_LARGE_ERROR } from './exceptions.constants';

/**
 * Class representing a Media Too Large error.
 * @extends PayloadTooLargeError
 */
class MediaTooLargeError extends PayloadTooLargeError {
  /**
   * Creates a Media Too Large error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, MEDIA_TOO_LARGE_ERROR, logging);
  }
}

export default MediaTooLargeError;
