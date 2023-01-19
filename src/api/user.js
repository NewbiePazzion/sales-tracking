import httpStatus from 'http-status';

const UserController = (services) => {
  const { userService } = services;

  /**
   * Get list of users
   *
   * @param {Request} req HTTP request
   * @param {Response} res HTTP response
   * @param {NextFunction} next Next function
   *
   * @return {any}
   *
   */
  const getAll = async (req, res, next) => {
    const filter = {};
    if (req.query.search) filter.search = req.query.search;

    try {
      const allData = await userService.getAllData(filter);
      return res.send(allData);
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Create user
   *
   * @param {Request} req HTTP request
   * @param {Response} res HTTP response
   * @param {NextFunction} next Next function
   *
   * @return {any}
   *
   */
  const create = async (req, res, next) => {
    try {
      const user = await userService.createData(req.body);
      return res.status(httpStatus.OK).send({
        message: 'Success create account!',
        data: user,
      });
    } catch (err) {
      return next(err);
    }
  };

  /**
   * Update user
   *
   * @param {Request} req HTTP request
   * @param {Response} res HTTP response
   * @param {NextFunction} next Next function
   *
   * @return {any}
   *
   */
  const update = async (req, res, next) => {
    try {
      const user = await userService.updateData(req.params.id, req.body);
      return res.status(httpStatus.OK).send({
        message: 'Success update account!',
        data: user,
      });
    } catch (err) {
      return next(err);
    }
  };

  return { getAll, create, update };
};

export default UserController;
