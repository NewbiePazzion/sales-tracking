import logger from '../config/logger';

const LoggerHelper = () => {
  /**
   * Generate error message based on template
   *
   * @param {Function} message message template literal
   * @param {Object} data data
   *
   * @return {String}
   *
   */
  const generateErrorMessage = (message, data) => {
    let error = null;
    if (data && data.error) {
      error = data.error instanceof Error ? data.error.message : data.error;
      error = JSON.stringify(error);
    }
    return message({ ...data, error });
  };

  /**
   * Generate error message object
   *
   * @param {Object} error custom error object
   * @param {Object} data data
   *
   * @return {Object}
   *
   */
  const generateErrorMessageObject = (error, data) => {
    const errMsg = generateErrorMessage(error.MESSAGE, data);
    return {
      status: error.ERROR,
      statusText: error.LABEL,
      identifier: error.CODE,
      message: errMsg,
      description: error.DESCRIPTION,
    };
  };

  /**
   * Generate info message object
   *
   * @param {Object} info Info template object
   * @param {Object} data Info data
   *
   * @return {Object}
   *
   */
  const generateInfoMessageObject = (info, data) => ({
    statusText: info.LABEL,
    identifier: info.CODE,
    message: info.MESSAGE({ ...data }),
  });

  /**
   * Log an error
   *
   * @param {Object} errorTemplate Error template object
   * @param {Object} data Error data
   *
   */
  const logError = (errorTemplate, data) => {
    const error = generateErrorMessageObject(errorTemplate, data);
    logger.error(error.statusText, error.message);
  };

  /**
   * Log a warn
   *
   * @param {Object} errorTemplate Error template object
   * @param {Object} data Error data
   *
   */
  const logWarn = (errorTemplate, data = {}) => {
    const error = generateErrorMessageObject(errorTemplate, data);
    logger.warn(error.statusText, error.message);
  };

  /**
   * Log an info
   *
   * @param {Object} infoTemplate Info template object
   * @param {Object} data Info data
   *
   */
  const logInfo = (infoTemplate, data) => {
    const info = generateInfoMessageObject(infoTemplate, data);
    logger.info(info.statusText, info.message);
  };

  return { logError, logWarn, logInfo };
};

export default LoggerHelper;
