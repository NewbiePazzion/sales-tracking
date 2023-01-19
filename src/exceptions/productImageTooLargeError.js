import PayloadTooLargeError from './payloadTooLargeError';
import { PRODUCT_IMAGE_TOO_LARGE_ERROR } from './exceptions.constants';

/**
 * Class representing a Product Image Too Large error.
 * @extends PayloadTooLargeError
 */
class ProductImageTooLargeError extends PayloadTooLargeError {
  /**
   * Creates a Product Image Too Large error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, PRODUCT_IMAGE_TOO_LARGE_ERROR, logging);
  }
}

export default ProductImageTooLargeError;
