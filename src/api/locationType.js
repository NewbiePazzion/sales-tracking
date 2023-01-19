const LocationTypeController = (services) => {
  const { locationTypeService } = services;

  /**
   * Get list of location types
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
      const allData = await locationTypeService.getAllData(filter);
      return res.send(allData);
    } catch (error) {
      return next(error);
    }
  };

  return { getAll };
};

export default LocationTypeController;
