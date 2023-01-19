import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  ROLE_MODEL_NAME,
  ROLE_TABLE_NAME,
  // PERMISSION_MODEL_NAME,
  // ROLE_PERMISSION_MODEL_NAME,
  // ROLE_BELONGS_TO_MANY_PERMISSION_FK,
  // ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS,
  // USER_MODEL_NAME,
  // USER_ROLE_MODEL_NAME,
  // ROLE_BELONGS_TO_MANY_USER_FK,
  // ROLE_BELONGS_TO_MANY_USER_ALIAS,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: Sequelize.STRING,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: ROLE_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const rolesModel = (sequelize) => {
  const roles = sequelize.define(ROLE_MODEL_NAME, schemaAttributes, schemaOptions);

  roles.associate = () => {
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

  return roles;
};

export default rolesModel;
