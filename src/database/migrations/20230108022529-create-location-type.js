import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  LOCATION_TYPE_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');
const schemaAttributes = {
  loc_ty: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  loc_ty_nm: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = {
  tableName: LOCATION_TYPE_TABLE_NAME,
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
