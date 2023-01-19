import {
  Error as SequelizeError,
  ValidationError as SequelizeValidationError,
} from 'sequelize';

import DbError from '../exceptions/dbError';
import DbValidationError from '../exceptions/dbValidationError';

/**
 * Get sequelize error
 *
 * @param {Error} error given error
 * @param {String} tableName given table name
 *
 * @return {DbError|DbValidationError|Error}
 *
 */
const getSequelizeError = (error, tableName) => {
  let err = error;
  if (error instanceof SequelizeValidationError) {
    err = new DbValidationError({ error, table: tableName });
  } else if (err instanceof SequelizeError) {
    err = new DbError({ error, table: tableName });
  }

  return err;
};

export { getSequelizeError };
