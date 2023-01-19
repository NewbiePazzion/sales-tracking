// import Joi from 'joi';

const UsersController = (services) => {
  const { userService } = services;

  /**
   * Create user account (admin and customer)
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
      const user = await userService.createAccount(req.body);

      return res.status(201).send({
        message: 'Success create account!',
        data: user,
      });
    } catch (err) {
      return next(err);
    }
  };

  return { create };
};

export default UsersController;
