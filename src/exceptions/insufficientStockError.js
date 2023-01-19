import BadRequestError from './badRequestError';
import { INSUFFICIENT_STOCK_ERROR } from './exceptions.constants';

/**
 * Class representing a Insufficient Stock error.
 * @extends UnauthorizedError
 */
class InsufficientStockError extends BadRequestError {
  /**
   * Creates a Insufficient Stock error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, INSUFFICIENT_STOCK_ERROR, logging);
  }
}

export default InsufficientStockError;
