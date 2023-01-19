import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  LOCATION_TYPE_MODEL_NAME,
  LOCATION_TYPE_TABLE_NAME,
} from '../fixtures/models';

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

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: LOCATION_TYPE_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const locationTypesModel = (sequelize) => {
  const locationTypes = sequelize.define(LOCATION_TYPE_MODEL_NAME, schemaAttributes, schemaOptions);

  locationTypes.associate = () => {};

  return locationTypes;
};

export default locationTypesModel;
