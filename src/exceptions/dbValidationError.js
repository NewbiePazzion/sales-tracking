import ValidationError from './validationError';
import { DB_VALIDATION_ERROR } from './exceptions.constants';

/**
 * Class representing a Database Validation error.
 * @extends ValidationError
 */
class DbValidationError extends ValidationError {
  /**
   * Creates a Database Validation error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, DB_VALIDATION_ERROR, logging);
  }
}

export default DbValidationError;
