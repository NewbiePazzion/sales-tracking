import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  LOCATION_TABLE_NAME,
} from '../../fixtures/models';

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

const schemaOptions = {
  tableName: LOCATION_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(schemaOptions, schemaAttributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable(schemaOptions);
  },
};
