import FirebaseError from './firebaseError';
import { FIREBASE_MESSAGING_ERROR } from './exceptions.constants';

/**
 * Class representing a Firebase messaging error.
 * @extends FirebaseError
 */
class FirebaseMessagingError extends FirebaseError {
  /**
   * Creates a Firebase messaging error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, FIREBASE_MESSAGING_ERROR, logging);
  }
}

export default FirebaseMessagingError;
