// import httpStatus from 'http-status';

const LocationController = (services) => {
  const { locationService } = services;

  /**
   * Get list of ...
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
      const allData = await locationService.getAllData(filter);
      return res.send(allData);
    } catch (error) {
      return next(error);
    }
  };

  return { getAll };
};

export default LocationController;
