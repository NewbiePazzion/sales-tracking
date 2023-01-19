import EmptyResultError from './emptyResultError';
import { DB_EMPTY_RESULT } from './exceptions.constants';

/**
 * Class representing a Database Empty error.
 * @extends EmptyResultError
 */
class DbEmptyResultError extends EmptyResultError {
  /**
   * Creates a Database Empty error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, DB_EMPTY_RESULT, logging);
  }
}

export default DbEmptyResultError;
