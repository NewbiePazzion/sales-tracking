import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  PROJECT_NAME_TABLE_NAME,
  PROJECT_YEAR_TABLE_NAME,
  LOCATION_TYPE_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');
const schemaAttributes = {
  proj_id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  proj_nm: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  proj_year: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: PROJECT_YEAR_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'proj_year',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  loc_ty: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: LOCATION_TYPE_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'loc_ty',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = {
  tableName: PROJECT_NAME_TABLE_NAME,
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
