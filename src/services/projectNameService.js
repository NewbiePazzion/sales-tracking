import { Op } from 'sequelize';

import { PROJECT_NAME_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const ProjectNameService = (models) => {
  const { ProjectName } = models;

  /**
   * Get list of project names
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
      if (filter.proj_year) {
        where.proj_year = filter.proj_year;
      }
      if (filter.search) {
        where.name = { [Op.iLike]: `%${filter.search}%` };
      }
    }

    let allData = null;
    try {
      allData = await ProjectName.findAll({ where });
    } catch (error) {
      const seqError = getSequelizeError(error, PROJECT_NAME_TABLE_NAME);
      throw seqError;
    }

    return allData;
  };

  return { getAllData };
};

export default ProjectNameService;
