import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  PROJECT_HOME_TABLE_NAME,
  PROJECT_NAME_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');
const schemaAttributes = {
  home_id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  loc_name: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  proj_id: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: PROJECT_NAME_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'proj_id',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  proj_nm: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = {
  tableName: PROJECT_HOME_TABLE_NAME,
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
