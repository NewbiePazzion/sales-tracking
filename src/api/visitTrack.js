import httpStatus from 'http-status';

const VisitTrackController = (services) => {
  const { visitTrackService } = services;

  /**
   * Get list of visit tracks
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
    if (req.query.CaeCd) filter.CaeCd = req.query.CaeCd;
    if (req.query.ProjId) filter.ProjId = req.query.ProjId;
    if (req.query.ID) filter.ID = req.query.ID;
    if (req.query.Start) filter.Start = req.query.Start;
    if (req.query.End) filter.End = req.query.End;
    if (req.query.search) filter.search = req.query.search;

    try {
      const allData = await visitTrackService.getAllData(filter);
      return res.send(allData);
    } catch (error) {
      return next(error);
    }
  };

  /**
   * Create visit track
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
      const user = await visitTrackService.createData(req.body);
      return res.status(httpStatus.OK).send({
        message: 'Success create data!',
        data: user,
      });
    } catch (err) {
      return next(err);
    }
  };

  return { getAll, create };
};

export default VisitTrackController;
