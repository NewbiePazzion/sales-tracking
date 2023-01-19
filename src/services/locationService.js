import { Op } from 'sequelize';

import { LOCATION_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const LocationService = (models) => {
  const { Location } = models;

  /**
   * Get list of ...
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
      allData = await Location.findAll({ where });
    } catch (error) {
      const seqError = getSequelizeError(error, LOCATION_TABLE_NAME);
      throw seqError;
    }

    return allData;
  };

  return { getAllData };
};

export default LocationService;
