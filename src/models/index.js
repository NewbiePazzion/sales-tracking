import path from 'path';
import sequelize from '../providers/sequelize';

const database = sequelize.initSequelize({
  modelDir: { dirname: __dirname, basename: path.basename(__filename) },
  ...sequelize.database,
});

database.Sequelize = sequelize.Sequelize;

module.exports = database;
