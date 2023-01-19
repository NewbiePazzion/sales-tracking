import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  PROJECT_HOME_MODEL_NAME,
  PROJECT_HOME_TABLE_NAME,
  PROJECT_NAME_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  home_id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING,
  },
  loc_name: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  proj_id: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: PROJECT_NAME_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'proj_id',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  proj_nm: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: PROJECT_HOME_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const projectHomesModel = (sequelize) => {
  const projectHomes = sequelize.define(PROJECT_HOME_MODEL_NAME, schemaAttributes, schemaOptions);

  projectHomes.associate = () => {
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

  return projectHomes;
};

export default projectHomesModel;
