import { Op } from 'sequelize';

import { USER_TABLE_NAME } from '../fixtures/models';
import { getSequelizeError } from '../utils/errorHelper';

const UserService = (models) => {
  const { User } = models;

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
    if (filter) {
      if (filter.StaffCode) {
        where.StaffCode = filter.StaffCode;
      }
      if (filter.Username) {
        where.Username = filter.Username;
      }
      if (filter.search) {
        where.name = { [Op.iLike]: `%${filter.search}%` };
      }
    }

    let allData = null;
    try {
      allData = await User.findAll({
        attributes: { exclude: ['Password'] },
        where,
      });
    } catch (error) {
      const seqError = getSequelizeError(error, USER_TABLE_NAME);
      throw seqError;
    }

    return allData;
  };

  /**
   * Create a user account
   *
   * @param {Object} data User's criteria
   *
   * @return {Object}
   *
   */
  const createData = async (data) => {
  // const hashedPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(8));
    const user = {
      ...data,
      // full_name: data.full_name,
      // email: data.email,
      // username: data.username,
      // password: data.password,
      // birthdate: data.birthdate,
      // address: data.address,
      // privacy_policy: data.privacy_policy,
    };
    let createdUser = null;

    try {
      createdUser = await User.create(user);
    } catch (error) {
      const seqError = getSequelizeError(error);
      throw seqError;
    }

    return createdUser;
    // return {
    //   createdUser,
    //   token: authHelper.generateToken(createdUser),
    //   refreshToken: authHelper.generateRefreshToken(createdUser),
    // };
  };

  /**
   * Update a user account
   *
   * @param {Object} data User's criteria
   *
   * @return {Object}
   *
   */
  const updateData = async (id, data) => {
    const user = { ...data };
    let updatedUser = null;

    try {
      [, updatedUser] = await User.update(
        user,
        {
          where: { StaffCode: id },
          returning: true,
        },
      );
    } catch (error) {
      const seqError = getSequelizeError(error);
      throw seqError;
    }
    delete updatedUser[0].Password;

    return updatedUser[0];
  };

  return { getAllData, createData, updateData };
};

export default UserService;
