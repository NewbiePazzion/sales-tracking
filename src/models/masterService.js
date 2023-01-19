import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_SERVICE_MODEL_NAME,
  MASTER_SERVICE_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  svc_cd: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  svc_nm: {
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
  tableName: MASTER_SERVICE_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const masterServicesModel = (sequelize) => {
  const masterServices = sequelize.define(MASTER_SERVICE_MODEL_NAME, schemaAttributes, schemaOptions);

  masterServices.associate = () => {};

  return masterServices;
};

export default masterServicesModel;
