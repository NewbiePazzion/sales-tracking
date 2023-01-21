import passport from 'passport';

const AuthController = (services) => {
  const { authService } = services;

  /**
   * Log user into the system
   *
   * @param {Request} req HTTP request
   * @param {Response} res HTTP response
   * @param {NextFunction} next Next function
   *
   * @return {any}
   *
   */
  const login = async (req, res, next) => (
    passport.authenticate('local', { session: false }, async (err, user) => {
      if (err) return next(err);

      // sign token
      const token = await authService.signToken({ ...user });

      return res.send({ ...token, UserCode: user.Username, Username: user.Username, BranchCode: '00' });
    })(req, res)
  );

  /**
   * Refresh user's jwt token
   *
   * @param {Request} req HTTP request
   * @param {Response} res HTTP response
   * @param {NextFunction} next Next function
   *
   * @return {any}
   *
   */
  const refreshToken = async (req, res, next) => {
    try {
      const token = await authService.refreshToken(req.query.refresh_token);
      return res.send(token);
    } catch (error) {
      return next(error);
    }
  };

  return { login, refreshToken };
};

export default AuthController;
