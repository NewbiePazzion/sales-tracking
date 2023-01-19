import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_ACTIVITY_MODEL_NAME,
  MASTER_ACTIVITY_TABLE_NAME,
} from '../fixtures/models';

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

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: MASTER_ACTIVITY_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const masterActivitiesModel = (sequelize) => {
  const masterActivities = sequelize.define(MASTER_ACTIVITY_MODEL_NAME, schemaAttributes, schemaOptions);

  masterActivities.associate = () => {};

  return masterActivities;
};

export default masterActivitiesModel;
