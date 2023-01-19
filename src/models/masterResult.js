import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_RESULT_MODEL_NAME,
  MASTER_RESULT_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  res_cd: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  res_nm: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  vld_thru: {
    allowNull: true,
    type: Sequelize.DATE,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: MASTER_RESULT_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const masterResultsModel = (sequelize) => {
  const masterResults = sequelize.define(MASTER_RESULT_MODEL_NAME, schemaAttributes, schemaOptions);

  masterResults.associate = () => {};

  return masterResults;
};

export default masterResultsModel;
