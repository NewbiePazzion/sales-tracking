import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  PROJECT_YEAR_MODEL_NAME,
  PROJECT_YEAR_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  proj_year: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: PROJECT_YEAR_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const projectYearsModel = (sequelize) => {
  const projectYears = sequelize.define(PROJECT_YEAR_MODEL_NAME, schemaAttributes, schemaOptions);

  projectYears.associate = () => {};

  return projectYears;
};

export default projectYearsModel;
