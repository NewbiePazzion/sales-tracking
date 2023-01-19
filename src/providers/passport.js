import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import config from '../config';
import { User } from '../models';
import AuthService from '../services/authService';

const { jwtConfig } = config('/');

export default () => {
  const authService = AuthService({ User });

  /**
   * API JWT Strategy
   *
   * @return {JwtStrategy}
   *
   */
  const apiJwtStrategy = () => {
    /**
     * Verify user from JWT token
     *
     * @param {Object} jwtPayload JWT token payload
     * @param {Function} done Callback function
     *
     * @return {Void}
     *
     */
    const verifyJwt = (jwtPayload, done) => {
      // JWT payload verified
      done(null, jwtPayload.sub);
    };

    const strategy = new JwtStrategy({
      secretOrKey: jwtConfig.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    }, verifyJwt);

    return strategy;
  };

  /**
   * Local Strategy
   *
   * @return {LocalStrategy}
   *
   */
  const localStrategy = () => {
    /**
     * Verify user
     *
     * @param {Object} req Request
     * @param {String} username Username
     * @param {String} password Password
     * @param {Function} done Callback function
     *
     * @return {Void}
     *
     */
    const verifyLocal = async (req, username, password, done) => {
      try {
        // const user = await authService.login(username, password, req.body.domain);
        const user = await authService.login(username, password);
        done(null, user);
      } catch (error) {
        done(error);
      }
    };

    const strategy = new LocalStrategy({ passReqToCallback: true }, verifyLocal);
    return strategy;
  };

  /**
   * Initialize passport
   *
   * @return {Passport}
   *
   */
  const init = () => {
    const passportAuth = passport.initialize();

    passport.use('jwt', apiJwtStrategy());
    passport.use('local', localStrategy());

    return passportAuth;
  };

  return { init };
};
