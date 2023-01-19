import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_RESIDENT_MODEL_NAME,
  MASTER_RESIDENT_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  resident_ty_cd: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  resident_ty_nm: {
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
  tableName: MASTER_RESIDENT_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const masterResidentsModel = (sequelize) => {
  const masterResidents = sequelize.define(MASTER_RESIDENT_MODEL_NAME, schemaAttributes, schemaOptions);

  masterResidents.associate = () => {};

  return masterResidents;
};

export default masterResidentsModel;
