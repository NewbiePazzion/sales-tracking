import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  LOCATION_MODEL_NAME,
  LOCATION_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  IDIntranet: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Ip: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Port: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  LocationName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  AliasLocationName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  TypeAbsen: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  MainLocation: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Address1: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Address2: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Address3: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Reference: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Telp: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Latitude: {
    allowNull: true,
    type: Sequelize.DECIMAL,
  },
  Longitude: {
    allowNull: true,
    type: Sequelize.DECIMAL,
  },
  Radius: {
    allowNull: true,
    type: Sequelize.DECIMAL,
  },
  TimeZoneID: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  DistanceMeters: {
    allowNull: true,
    type: Sequelize.DECIMAL,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: LOCATION_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const locationsModel = (sequelize) => {
  const locations = sequelize.define(LOCATION_MODEL_NAME, schemaAttributes, schemaOptions);

  locations.associate = () => {
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

  return locations;
};

export default locationsModel;
