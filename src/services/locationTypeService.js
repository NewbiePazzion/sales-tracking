import { Op } from 'sequelize';

import { LOCATION_TYPE_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const LocationTypeService = (models) => {
  const { LocationType } = models;

  /**
   * Get list of location types
   *
   * @param {Object} filter Filter data
   *
   * @throws {DbError}
   * @throws {DbValidationError}
   *
   * @return {Array}
   *
   */
  const getAllData = async (filter) => {
    const where = {};
    if (filter) {
      if (filter.search) {
        where.name = { [Op.iLike]: `%${filter.search}%` };
      }
    }

    let allData = null;
    try {
      allData = await LocationType.findAll({ where });
    } catch (error) {
      const seqError = getSequelizeError(error, LOCATION_TYPE_TABLE_NAME);
      throw seqError;
    }

    return allData;
  };

  return { getAllData };
};

export default LocationTypeService;
