import { getSwaggerSpec } from '../config/swagger';

const docsController = () => {
  /**
   * Generate Swagger docs
   *
   * @param {Request} req HTTP request
   * @param {Response} res HTTP response
   *
   * @return {any}
   *
   */
  const generate = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const host = req.get('host');
    const swaggerSpec = getSwaggerSpec(host);
    res.send(swaggerSpec);
  };

  return { generate };
};

export default docsController;
