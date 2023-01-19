import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import config from '../config/index';
import { STRACK_DATABASE } from '../fixtures/models';

const { database } = config('/');

// initialize sequelize
const initSequelize = ({ dbName, username, password, host, dialect, modelDir, port = 1433, schema, dialectOptions }) => {
  const options = { host, dialect, port, schema, dialectOptions };
  // log sequelize query into console only on dev env
  if (process.env.NODE_ENV !== 'dev') options.logging = false;
  const sequelize = new Sequelize(dbName, username, password, options);

  // Dynamically add model into db object
  fs.readdirSync(modelDir.dirname)
    .filter((file) => (file.indexOf('.') !== 0)
      && (file !== modelDir.basename)
      && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = require(path.join(modelDir.dirname, file)).default(sequelize, Sequelize);
      sequelize[model.name] = model;
    });

  Object.keys(sequelize).forEach((modelName) => {
    if (sequelize[modelName].associate) {
      sequelize[modelName].associate(sequelize);
    }
  });
  return sequelize;
};

export default {
  initSequelize,
  Sequelize,
  database: {
    dbName: database[STRACK_DATABASE].database,
    schema: database[STRACK_DATABASE].schema || 'public',
    username: database[STRACK_DATABASE].username,
    password: database[STRACK_DATABASE].password,
    host: database[STRACK_DATABASE].host,
    port: database[STRACK_DATABASE].port,
    dialect: database[STRACK_DATABASE].dialect,
    timezone: database[STRACK_DATABASE].timezone || '+00:00',
    dialectOptions: database[STRACK_DATABASE].dialectOptions,
  },
};
