import { Op } from 'sequelize';

import { PROJECT_YEAR_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const ProjectYearService = (models) => {
  const { ProjectYear } = models;

  /**
   * Get list of project years
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
      allData = await ProjectYear.findAll({ where });
    } catch (error) {
      const seqError = getSequelizeError(error, PROJECT_YEAR_TABLE_NAME);
      throw seqError;
    }

    return allData;
  };

  return { getAllData };
};

export default ProjectYearService;
