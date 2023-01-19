import { Op } from 'sequelize';

import { PROJECT_HOME_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const ProjectHomeService = (models) => {
  const { ProjectHome } = models;

  /**
   * Get list of project homes
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
      if (filter.proj_id) {
        where.proj_id = filter.proj_id;
      }
      if (filter.search) {
        where.name = { [Op.iLike]: `%${filter.search}%` };
      }
    }

    let allData = null;
    try {
      allData = await ProjectHome.findAll({ where });
    } catch (error) {
      const seqError = getSequelizeError(error, PROJECT_HOME_TABLE_NAME);
      throw seqError;
    }

    return allData;
  };

  return { getAllData };
};

export default ProjectHomeService;
