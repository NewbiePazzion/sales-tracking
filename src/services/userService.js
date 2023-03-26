import bcrypt from 'bcrypt';
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
      if (filter.Role) {
        where.Role = filter.Role;
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
    if (user.Password) {
      // user.Password = await bcrypt.hash(user.Password, 10);
      user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(8));
    }
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

  /**
   * Remove a user account
   *
   * @param {Integer} id User's id
   *
   * @return {Object}
   *
   */
  const removeData = async (id) => {
    try {
      await User.destroy({ where: { StaffCode: id } });
    } catch (error) {
      const seqError = getSequelizeError(error);
      throw seqError;
    }

    return true;
  };

  return { getAllData, createData, updateData, removeData };
};

export default UserService;
