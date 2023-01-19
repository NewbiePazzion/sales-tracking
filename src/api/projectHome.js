const ProjectHomeController = (services) => {
  const { projectHomeService } = services;

  /**
   * Get list of project homes
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
    if (req.query.proj_id) filter.proj_id = req.query.proj_id;
    if (req.query.search) filter.search = req.query.search;

    try {
      const allData = await projectHomeService.getAllData(filter);
      return res.send(allData);
    } catch (error) {
      return next(error);
    }
  };

  return { getAll };
};

export default ProjectHomeController;
