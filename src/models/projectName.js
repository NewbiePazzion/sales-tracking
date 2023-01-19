import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  PROJECT_NAME_MODEL_NAME,
  PROJECT_NAME_TABLE_NAME,
  PROJECT_YEAR_TABLE_NAME,
  LOCATION_TYPE_TABLE_NAME,
} from '../fixtures/models';

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

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: PROJECT_NAME_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const projectNamesModel = (sequelize) => {
  const projectNames = sequelize.define(PROJECT_NAME_MODEL_NAME, schemaAttributes, schemaOptions);

  projectNames.associate = () => {
  // roles.associate = (models) => {
    // // role has many permissions through role_permissions
    // roles.belongsToMany(models[PERMISSION_MODEL_NAME], {
    //   through: { model: ROLE_PERMISSION_MODEL_NAME },
    //   foreignKey: ROLE_BELONGS_TO_MANY_PERMISSION_FK,
    //   as: ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS,
    // });
    // // role has many users through user_roles
    // roles.belongsToMany(models[USER_MODEL_NAME], {
    //   through: { model: USER_ROLE_MODEL_NAME },
    //   foreignKey: ROLE_BELONGS_TO_MANY_USER_FK,
    //   as: ROLE_BELONGS_TO_MANY_USER_ALIAS,
    // });
  };

  return projectNames;
};

export default projectNamesModel;
