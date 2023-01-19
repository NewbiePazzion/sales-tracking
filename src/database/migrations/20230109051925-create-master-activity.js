import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  MASTER_ACTIVITY_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');
const schemaAttributes = {
  actv_cd: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  actv_nm: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  vld_thru: {
    allowNull: true,
    type: Sequelize.DATE,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = {
  tableName: MASTER_ACTIVITY_TABLE_NAME,
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
