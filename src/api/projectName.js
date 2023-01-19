const ProjectNameController = (services) => {
  const { projectNameService } = services;

  /**
   * Get list of project names
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
    if (req.query.proj_year) filter.proj_year = req.query.proj_year;
    if (req.query.search) filter.search = req.query.search;

    try {
      const allData = await projectNameService.getAllData(filter);
      return res.send(allData);
    } catch (error) {
      return next(error);
    }
  };

  return { getAll };
};

export default ProjectNameController;
