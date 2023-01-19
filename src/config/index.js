import path from 'path';
import confidence from 'confidence';
import { STRACK_DATABASE } from '../fixtures/models';

require('dotenv').config();

const config = {
  name: 'garuda-template-api',
  description: 'Backend Service for Garuda Template',
  appRoot: path.resolve(__dirname, '../../'),
  appUrl: process.env.APP_URL,
  host: process.env.SERVICE_HOST,
  port: process.env.SERVICE_PORT,
  env: process.env.NODE_ENV,
  database: {
    [STRACK_DATABASE]: {
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      dialect: process.env.DB_DIALECT,
      schema: process.env.DB_SCHEMA,
    },
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    expiration: `${process.env.JWT_EXPIRATION_MINUTES || 1440}m`,
    refreshTokenExpiration: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_DAYS || 7}d`,
  },
  filesystems: {
    default: process.env.FILESYSTEM_DRIVER || 'local',
    disks: {
      local: {
        driver: 'local',
        root: 'storage/app',
        temp: 'storage/app/temp',
      },
      public: {
        driver: 'local',
        root: 'storage/app/public',
        temp: 'storage/app/temp',
      },
    },
    groups: {
      book: {
        baseDir: '/books',
        limits: {
          files: 1,
          fileSize: (process.env.PRODUCT_IMAGE_FILE_SIZE || 5) * 1024 * 1024, // mb
        },
      },
    },
  },
};

const store = new confidence.Store(config);

export default (key) => store.get(key);
