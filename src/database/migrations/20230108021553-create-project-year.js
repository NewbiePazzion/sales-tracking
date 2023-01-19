import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  PROJECT_YEAR_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');
const schemaAttributes = {
  proj_year: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = {
  tableName: PROJECT_YEAR_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(schemaOptions, schemaAttributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable(schemaOptions);
  },
};
