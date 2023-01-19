import {
  USER_TABLE_NAME,
  USER_BELONGS_TO_MANY_ROLE_ALIAS,
  ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS,
  PERMISSION_BELONGS_TO_MENU_ALIAS,
} from '../fixtures/models';
import { authHelper } from '../utils';
import { getSequelizeError } from '../utils/errorHelper';
import DbEmptyResultError from '../exceptions/dbEmptyResultError';

const UserService = (models) => {
  const { User } = models;

  /**
   * Get user by criteria
   *
   * @param {Object} criteria User's criteria
   *
   * @throws {DbError}
   * @throws {DbValidationError}
   * @throws {DbEmptyResultError}
   *
   * @return {Object}
   *
   */
  const getUserbyId = async (id) => {
    let users = null;
    try {
      users = await User.findByPk(
        id,
        {
          include: [{
            association: USER_BELONGS_TO_MANY_ROLE_ALIAS,
            attributes: ['id', 'uuid', 'name'],
            include: [{
              association: ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS,
              include: [{
                association: PERMISSION_BELONGS_TO_MENU_ALIAS,
                attributes: ['id', 'group', 'name', 'level'],
              }],
              through: { attributes: [] },
            }],
            through: { attributes: [] },
          }],
        },
      );
    } catch (error) {
      const seqError = getSequelizeError(error);
      throw seqError;
    }

    if (!users) {
      throw new DbEmptyResultError({ table: USER_TABLE_NAME });
    }

    return users;
  };

  /**
   * Create a user account
   *
   * @param {Object} data User's criteria
   *
   * @return {Object}
   *
   */
  const createAccount = async (data) => {
    // const hashedPassword = bcrypt.hashSync(data.password, bcrypt.genSaltSync(8));
    const user = {
      full_name: data.full_name,
      email: data.email,
      username: data.username,
      password: data.password,
      birthdate: data.birthdate,
      address: data.address,
      privacy_policy: data.privacy_policy,
    };
    let createdUser = null;

    try {
      createdUser = await User.create(user);
    } catch (error) {
      const seqError = getSequelizeError(error);
      throw seqError;
    }

    return {
      createdUser,
      token: authHelper.generateToken(createdUser),
      refreshToken: authHelper.generateRefreshToken(createdUser),
    };
  };

  /**
   * Search users with criteria
   *
   * @param {Object} query object with key-value of search criteria
   *
   * @return {Object}
   *
   */
  const getUsers = async (query) => {
    let users = null;

    try {
      users = await User.findAll({ where: query });
    } catch (error) {
      const seqError = getSequelizeError(error);
      throw seqError;
    }

    if (!users) {
      throw new DbEmptyResultError({ table: USER_TABLE_NAME });
    }

    return users;
  };

  return {
    getUserbyId,
    createAccount,
    getUsers,
  };
};

export default UserService;
