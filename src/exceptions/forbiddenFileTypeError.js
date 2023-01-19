import ForbiddenError from './forbiddenError';
import { FORBIDDEN_FILE_TYPE } from './exceptions.constants';

/**
 * Class representing a Forbidden File Type error.
 * @extends ForbiddenError
 */
class ForbiddenFileType extends ForbiddenError {
  /**
   * Creates a Forbidden File Type error
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, FORBIDDEN_FILE_TYPE, logging);
  }
}

export default ForbiddenFileType;
