const MasterDataController = (services) => {
  const { masterDataService } = services;

  /**
   * Get list of master datas
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
    if (req.query.type) filter.type = req.query.type;

    try {
      const allData = await masterDataService.getAllData(filter);
      return res.send(allData);
    } catch (error) {
      return next(error);
    }
  };

  return { getAll };
};

export default MasterDataController;
