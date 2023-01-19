import fs from 'fs';
import lo from 'lodash';
import Sequelize from 'sequelize';

import config from '../config';
import RenameFileError from '../exceptions/renameFileError';
import FilesystemError from '../exceptions/filesystemError';

const compileWhereWithLastSyncDate = (where, lastSyncDate) => {
  // eslint-disable-next-line no-param-reassign
  where = lo.pickBy(where);

  // eslint-disable-next-line no-param-reassign
  where.updatedAt = where.updatedAt ? {
    [Sequelize.Op.and]: {
      [Sequelize.Op.gt]: lastSyncDate,
      [Sequelize.Op.eq]: where.updatedAt,
    },
  } : { [Sequelize.Op.gt]: lastSyncDate };

  return where;
};

/**
 * Get table name
 *
 * @param {Object} model model data
 * @return {Object}
 *
 */
const getTableName = (model) => {
  const tableNameObj = model.getTableName();
  return `${tableNameObj.schema}.${tableNameObj.tableName}`;
};

/**
 * Move file to specific directory
 *
 * @param {String} from Path of file source
 * @param {String} to Path of file destination
 */
const moveFile = (from, to) => {
  if (!fs.existsSync(from)) return false;

  try {
    fs.renameSync(from, to);
    return true;
  } catch (error) {
    throw new RenameFileError({ error, from, to });
  }
};

/**
 * Get the timestamp indicating the last time this file was modified.
 *
 * @param {String} path Path of the file source
 * @return {Date}
 *
 */
const getFileModifiedTimestamp = (path) => {
  try {
    const date = fs.statSync(path).mtime;
    return date;
  } catch (error) {
    throw new FilesystemError({ error });
  }
};

/**
 * Get avatar url if avatar exist
 *
 * @param {Object} avatar avatar file name
 * @return {Object}
 *
 */
const getAvatarUrl = (avatar) => {
  if (!avatar) return avatar;
  const { appUrl, filesystems } = config('/');

  const avatarConfig = filesystems.groups.userAvatar;
  const avatarUrl = `${appUrl}${avatarConfig.baseDir}`;
  return `${avatarUrl}/${avatar}`;
};

/**
 * Get product image url if image exist
 *
 * @param {Object} productImage product image file name
 * @return {Object}
 *
 */
const getProductImageUrl = (productImage) => {
  if (!productImage) return productImage;
  const { appUrl, filesystems } = config('/');

  const productImageConfig = filesystems.groups.productImage;
  const productImageUrl = `${appUrl}${productImageConfig.baseDir}`;
  return `${productImageUrl}/${productImage}`;
};

/**
 * Get customer nric image url if image exist
 *
 * @param {Object} customerNric customer nric image file name
 * @return {Object}
 *
 */
const getCustomerNricUrl = (customerNric) => {
  if (!customerNric) return customerNric;
  const { appUrl, filesystems } = config('/');

  const customerNricConfig = filesystems.groups.customerNric;
  const customerNricUrl = `${appUrl}${customerNricConfig.baseDir}`;
  return `${customerNricUrl}/${customerNric}`;
};

/**
 * Get payment evidence image url if image exist
 *
 * @param {Object} evidenceImage payment evidence image file name
 * @return {Object}
 *
 */
const getPaymentEvidenceUrl = (paymentEvidence) => {
  if (!paymentEvidence) return paymentEvidence;
  const { appUrl, filesystems } = config('/');

  const paymentEvidenceConfig = filesystems.groups.paymentEvidence;
  const paymentEvidenceUrl = `${appUrl}${paymentEvidenceConfig.baseDir}`;
  return `${paymentEvidenceUrl}/${paymentEvidence}`;
};

export default {
  compileWhereWithLastSyncDate,
  getTableName,
  moveFile,
  getFileModifiedTimestamp,
  getAvatarUrl,
  getProductImageUrl,
  getCustomerNricUrl,
  getPaymentEvidenceUrl,
};
