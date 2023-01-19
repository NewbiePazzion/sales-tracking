import { Op } from 'sequelize';

import { PROJECT_HOME_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const MasterDataService = (models) => {
  const { MasterActivity, MasterService, MasterProvider, MasterResult, MasterResident } = models;

  /**
   * Get list of master datas
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
    let type = null;
    if (filter) {
      if (filter.type) {
        type = filter.type ? filter.type.toLowerCase() : null;
        if (Number(type)) {
          // const typeNum = Number(type);
          switch (Number(type)) {
            case 1:
              type = 'activity';
              break;
            case 2:
              type = 'service';
              break;
            case 3:
              type = 'provider';
              break;
            case 4:
              type = 'result';
              break;
            case 5:
              type = 'resident';
              break;
            default:
              type = null;
          }
        }
      }
      if (filter.search) {
        where.name = { [Op.iLike]: `%${filter.search}%` };
      }
    }

    let allData = null;
    switch (type) {
      case 'activity':
        try {
          allData = await MasterActivity.findAll({ where });
        } catch (error) {
          const seqError = getSequelizeError(error, PROJECT_HOME_TABLE_NAME);
          throw seqError;
        }
        break;
      case 'service':
        try {
          allData = await MasterService.findAll({ where });
        } catch (error) {
          const seqError = getSequelizeError(error, PROJECT_HOME_TABLE_NAME);
          throw seqError;
        }
        break;
      case 'provider':
        try {
          allData = await MasterProvider.findAll({ where });
        } catch (error) {
          const seqError = getSequelizeError(error, PROJECT_HOME_TABLE_NAME);
          throw seqError;
        }
        break;
      case 'result':
        try {
          allData = await MasterResult.findAll({ where });
        } catch (error) {
          const seqError = getSequelizeError(error, PROJECT_HOME_TABLE_NAME);
          throw seqError;
        }
        break;
      case 'resident':
        try {
          allData = await MasterResident.findAll({ where });
        } catch (error) {
          const seqError = getSequelizeError(error, PROJECT_HOME_TABLE_NAME);
          throw seqError;
        }
        break;
      default:
        allData = [];
    }

    return allData;
  };

  return { getAllData };
};

export default MasterDataService;
