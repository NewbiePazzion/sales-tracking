import passport from 'passport';

import AuthError from '../exceptions/authError';
import UnauthorizedError from '../exceptions/unauthorizedError';

/**
 * Handle an incoming request
 *
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @param {Function} next Next function
 *
 * @return {Function}
 *
 */
const handler = (req, res, next) => async (err, user, info) => {
  if (user) {
    // append user to request
    req.user = user;
    return next();
  }

  const error = err || info;
  if (err) {
    // error that coming from `err`
    return next(new AuthError({ error }));
  }

  // error that coming from `info`
  return next(new UnauthorizedError({ error, errorMessage: error.message }));
};

export default (strategy) => (req, res, next) => {
  passport.authenticate(
    strategy,
    { session: false },
    handler(req, res, next),
  )(req, res, next);
};
