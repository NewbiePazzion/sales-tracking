import { Op } from 'sequelize';

import { VISIT_TRACK_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const VisitTrackService = (models) => {
  const { VisitTrack, User } = models;

  /**
   * Get list of visit track
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
    let whereUser = {};
    if (filter) {
      if (filter.CaeCd) {
        where.CaeCd = { [Op.iLike]: `%${filter.CaeCd}%` };
      }
      if (filter.ProjId) {
        where.ProjId = filter.ProjId;
      }
      if (filter.ID) {
        where.ID = filter.ID;
      }
      if (filter.Start) {
        where.VstTm = { [Op.gte]: filter.Start };
      }
      if (filter.End) {
        where.VstTm = { ...where.VstTm, [Op.lte]: filter.End };
      }
      if (filter.Name) {
        whereUser = { [Op.or]: [{ Fullname: { [Op.iLike]: `%${filter.Name}%` } }, { ShortName: { [Op.iLike]: `%${filter.Name}%` } }] };
      }
      if (filter.search) {
        where.name = { [Op.iLike]: `%${filter.search}%` };
      }
    }

    let user = [];
    try {
      user = await User.findAll({ where: whereUser });
    } catch (error) {
      const seqError = getSequelizeError(error, VISIT_TRACK_TABLE_NAME);
      throw seqError;
    }

    let usernames = [];
    if (user.length) {
      usernames = user.map((u) => u.Username);
      where.CaeCd = usernames;
    }

    let allData = null;
    try {
      allData = await VisitTrack.findAll({ where });
    } catch (error) {
      const seqError = getSequelizeError(error, VISIT_TRACK_TABLE_NAME);
      throw seqError;
    }

    return allData;
  };

  /**
   * Create a visit track
   *
   * @param {Object} data Visit track's criteria
   *
   * @return {Object}
   *
   */
  const createData = async (data) => {
    const obj = { ...data };
    let createdData = null;

    try {
      createdData = await VisitTrack.create(obj);
    } catch (error) {
      const seqError = getSequelizeError(error);
      throw seqError;
    }

    return createdData;
  };

  return { getAllData, createData };
};

export default VisitTrackService;
