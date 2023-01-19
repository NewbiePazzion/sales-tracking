import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  USER_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');
const schemaAttributes = {
  StaffCode: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  Username: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  Password: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  Role: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  PIN: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  MaxDevice: {
    allowNull: true,
    type: Sequelize.INTEGER,
  },
  NIK: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CardID: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CardAccessNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BuildingCardId: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  AbsenType: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  IdNumber: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  NoKK: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Fullname: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ShortName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  SignInDate: {
    allowNull: true,
    type: Sequelize.DATEONLY,
  },
  StatusEmployeeCode: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BirthPlace: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BirthDate: {
    allowNull: true,
    type: Sequelize.DATEONLY,
  },
  Phone: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  HandPhone: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Email: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Address: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  City: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ZipCode: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  AddressDomisili: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CityDomisili: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ZipCodeDomisili: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Extension: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  MaritalStatus: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  LastDegree: {
    allowNull: true,
    type: Sequelize.INTEGER,
  },
  Gender: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Religion: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  PassportNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BloodType: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BankAccountNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  NPWPNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  NPWPDate: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  LastNIK: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CustomerIDCBN: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ProfilPict: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  IdCardPict: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Notes: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Division: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  DivisionAlias: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Department: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  DepartmentAlias: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  SubDepartment: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Group: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  StaffStatusName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  GenderName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ReligionName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  JobFunctionName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  PositionName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  PositionCode: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  imageBase: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ImageBase: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ReasonDeleted: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = {
  tableName: USER_TABLE_NAME,
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
