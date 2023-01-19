import lo from 'lodash';
import { createLogger, format, transports } from 'winston';

import {
  LOG_LEVEL_INFO,
  LOG_FORMAT,
} from '../fixtures/log';

const customFormat = format.printf(LOG_FORMAT);

const levelUpperCaseFormat = format((info) => (
  lo.assignIn(info, { level: info.level.toUpperCase() })
));

const logger = createLogger({
  level: LOG_LEVEL_INFO,
  format: format.combine(
    levelUpperCaseFormat(),
    format.timestamp(),
    customFormat,
  ),
  transports: [],
});

logger.add(new transports.Console({
  format: format.combine(
    levelUpperCaseFormat(),
    format.timestamp(),
    format.colorize(),
    customFormat,
  ),
}));

export default ({
  info: (label, message) => logger.info({ label, message }),
  warn: (label, message) => logger.warn({ label, message }),
  error: (label, message) => logger.error({ label, message }),
});
