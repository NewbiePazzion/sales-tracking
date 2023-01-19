import jwt from 'jsonwebtoken';

import config from '../config';
import UnauthorizedError from '../exceptions/unauthorizedError';

const { jwtConfig } = config('/');

/**
 * Generate token based on user data
 *
 * @param {Object} user User data
 *
 * @throws {UnauthorizedError}
 * @return {Object} Generated token
 *
 */
const generateToken = (user) => {
  let result;
  // const payload = { sub: { id: user.id, role: user.role, type: user.type } };
  const payload = { sub: { StaffCode: user.StaffCode, Username: user.Username, Role: user.Role } };

  try {
    if (!user) { throw new Error('user is not defined'); }
    result = jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiration });
  } catch (error) {
    throw new UnauthorizedError({ error });
  }
  return result;
};

/**
 * Generate refresh token based on user data
 *
 * @param {Object} user User data
 *
 * @throws {UnauthorizedError}
 * @return {Object} Generated refresh token
 *
 */
const generateRefreshToken = (user) => {
  let result;
  const payload = { sub: { id: user.id, role: user.role, type: user.type } };

  try {
    if (!user) { throw new Error('user is not defined'); }
    result = jwt.sign(payload, jwtConfig.refreshTokenSecret, { expiresIn: jwtConfig.refreshTokenExpiration });
  } catch (error) {
    throw new UnauthorizedError({ error });
  }
  return result;
};

/**
 * Verify refresh token
 *
 * @param {String} token Refresh token
 *
 * @throws {UnauthorizedError}
 * @return {Object}
 *
 */
const verifyRefreshToken = (token) => {
  let result;
  try {
    if (!token) throw new Error('token is not defined');
    result = jwt.verify(token, jwtConfig.refreshTokenSecret);
  } catch (error) {
    throw new UnauthorizedError({ error });
  }
  return result;
};

/**
 * Generate API token based on user data (third-party)
 *
 * @param {Object} user User data
 *
 * @throws {UnauthorizedError}
 * @return {Object} Generated token
 *
 */
const generateApiToken = (user) => {
  let result;
  const payload = { sub: { id: user.id, name: user.full_name } };

  try {
    if (!user) { throw new Error('user is not defined'); }
    result = jwt.sign(payload, jwtConfig.secret, { expiresIn: '900y' });
  } catch (error) {
    throw new UnauthorizedError({ error });
  }
  return result;
};

export default {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
  generateApiToken,
};
