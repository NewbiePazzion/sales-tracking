import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_PROVIDER_MODEL_NAME,
  MASTER_PROVIDER_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  pvd_cd: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  pvd_nm: {
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
  tableName: MASTER_PROVIDER_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const masterProvidersModel = (sequelize) => {
  const masterProviders = sequelize.define(MASTER_PROVIDER_MODEL_NAME, schemaAttributes, schemaOptions);

  masterProviders.associate = () => {};

  return masterProviders;
};

export default masterProvidersModel;
