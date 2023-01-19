import FilesystemError from './filesystemError';
import { MOVE_FILE_ERROR } from './exceptions.constants';

/**
 * Class representing a Database Validation error.
 * @extends FilesystemError
 */
class MoveFileError extends FilesystemError {
  /**
   * Moves a File Validation error.
   *
   * @param {Object} data Error data.
   * @param {boolean} [logging=true] Whether the message should be log or not.
   *
   */
  constructor(data, logging = true) {
    super(data, MOVE_FILE_ERROR, logging);
  }
}

export default MoveFileError;
