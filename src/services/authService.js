import lo from 'lodash';
import { Op } from 'sequelize';

// import DbEmptyResultError from '../exceptions/dbEmptyResultError';
import InvalidCredentialsError from '../exceptions/invalidCredentialsError';
import InvalidPasswordError from '../exceptions/invalidPasswordError';
import LoggedInAnotherDeviceError from '../exceptions/loggedInAnotherDeviceError';
import UnregisteredUserForbiddenLoginError from '../exceptions/unregisteredUserForbiddenLoginError';
// import UserForbiddenAccessError from '../exceptions/userForbiddenAccessError';
import { ADMINISTRATOR } from '../fixtures/roles';
// import { USER_TABLE_NAME, USER_ID, USER_BELONGS_TO_ROLE_ALIAS, TABLE_META_ATTRIBUTES, USER_AUTH_ATTRIBUTES, USER_BELONGS_TO_MANY_ROLE_ALIAS, ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS, PERMISSION_BELONGS_TO_MENU_ALIAS } from '../fixtures/models';
import { USER_TABLE_NAME, USER_ID, USER_BELONGS_TO_ROLE_ALIAS, TABLE_META_ATTRIBUTES } from '../fixtures/models';
import { authHelper, errorHelper } from '../utils';
import { getSequelizeError } from '../utils/errorHelper';

// const service = (models, providers) => {
const service = (models) => {
  const { User } = models;
  // const {} = providers;

  /**
   * Sign-in new token based on user data
   *
   * @param {Object} user User data
   *
   * @return {Object}
   *
   */
  const signToken = async (user) => {
    // generate token & refresh token
    const token = await authHelper.generateToken(user);
    // const refreshToken = await authHelper.generateRefreshToken(user);

    // try {
    //   await User.update({ refresh_token: refreshToken }, { where: { id: user.id } });
    // } catch (error) {
    //   // throw the error
    //   const seqError = getSequelizeError(error, USER_TABLE_NAME);
    //   throw seqError;
    // }
    // return { token, refresh_token: refreshToken };
    return { token };
  };

  /**
   * Login for user
   *
   * @param {String} username Username
   * @param {String} password Password
   * @param {String} domain Domain
   *
   * @throws {DbError}
   * @throws {UnauthorizedError}
   * @return {Object}
   *
   */
  const login = async (username, password) => {
    let user = null;
    user = await dbLogin(username, password);

    if (!user) {
      throw new InvalidCredentialsError({ error: `${username} not found at selected domain` });
    }

    return user;
  };
  // const login = async (username, password, domain) => {
  //   let user = null;
  //   if (domain) {
  //     user = domain === 'external'
  //       ? await dbLogin(username, password)
  //       : null;

  //     if (user) {
  //       if (!user.roles || !user.roles.length) {
  //         throw new UserForbiddenAccessError({ username: user.username });
  //       }

  //       return user;
  //     }
  //   }

  //   throw new InvalidCredentialsError({ error: `${username} not found at selected domain` });
  // };

  /**
   * refresh token for user
   *
   * @param {String} token Refresh Token
   *
   * @return {Object}
   *
   */
  const refreshToken = async (token) => {
    const refreshTokenInfo = await authHelper.verifyRefreshToken(token);

    let user;
    try {
      user = await User.findOne({
        attributes: [USER_ID],
        where: {
          id: refreshTokenInfo.sub.id,
          refresh_token: token,
        },
        include: [{
          association: USER_BELONGS_TO_ROLE_ALIAS,
          attributes: { exclude: Object.keys(TABLE_META_ATTRIBUTES) },
        }],
      });
    } catch (error) {
      const err = errorHelper.getSequelizeError(error, USER_TABLE_NAME);
      throw err;
    }

    if (!user) throw new LoggedInAnotherDeviceError();

    return { token: await authHelper.generateToken({ id: user.id, role: ADMINISTRATOR, type: user.role.name }) };
  };

  /**
   * Login via database
   *
   * @param {String} username Username
   * @param {String} password Password
   *
   * @throws {DbError}
   * @throws {UnauthorizedError}
   * @return {Object}
   *
   */
  const dbLogin = async (username, password) => {
    let user = null;
    try {
      user = await User.findOne({
        // attributes: USER_AUTH_ATTRIBUTES,
        attributes: ['StaffCode', 'Username', 'Password', 'Role'],
        where: { Username: { [Op.iLike]: username } },
        // include: [{
        //   association: USER_BELONGS_TO_MANY_ROLE_ALIAS,
        //   attributes: ['id', 'name'],
        //   include: [{
        //     association: ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS,
        //     include: [{
        //       association: PERMISSION_BELONGS_TO_MENU_ALIAS,
        //       attributes: ['id', 'group', 'name', 'level'],
        //     }],
        //     through: { attributes: [] },
        //   }],
        //   through: { attributes: [] },
        // }],
      });
    } catch (error) {
      const seqError = getSequelizeError(error, USER_TABLE_NAME);
      throw seqError;
    }

    if (!user || lo.isEmpty(user)) throw new UnregisteredUserForbiddenLoginError({ username });
    if (!user.Password) throw new InvalidPasswordError({ error: `Invalid password for ${username}` });

    // validate user
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) throw new InvalidCredentialsError({ error: 'Invalid password' });

    if (user.dataValues) {
      user = user.dataValues;
    }

    return user;
  };

  return {
    signToken,
    refreshToken,
    login,
  };
};

export default service;
