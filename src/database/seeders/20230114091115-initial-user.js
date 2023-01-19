import bcrypt from 'bcrypt';
import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  USER_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    StaffCode: 1,
    Username: 'superadmin',
    Password: bcrypt.hashSync('1234', bcrypt.genSaltSync(8)),
    Role: 'superadmin',
  }, {
    StaffCode: 2,
    Username: 'admin',
    Password: bcrypt.hashSync('1234', bcrypt.genSaltSync(8)),
    Role: 'admin',
  }, {
    StaffCode: 2274,
    Username: 'putra',
    Password: bcrypt.hashSync('1234', bcrypt.genSaltSync(8)),
    Role: 'employee',
    PIN: '122222',
    MaxDevice: 10,
    NIK: '1220005',
    CardID: '9220005',
    CardAccessNo: null,
    BuildingCardId: null,
    AbsenType: null,
    IdNumber: '3175092601990003',
    NoKK: null,
    Fullname: 'Muhammad Rahimsyah Putra',
    ShortName: null,
    SignInDate: '2022-01-03',
    StatusEmployeeCode: '2',
    BirthPlace: 'Jakarta',
    BirthDate: '1999-01-26',
    Phone: null,
    HandPhone: '083870031314',
    Email: 'rahimsyah.putra@gmail.com',
    Address: null,
    City: null,
    ZipCode: null,
    AddressDomisili: null,
    CityDomisili: null,
    ZipCodeDomisili: null,
    Extension: null,
    MaritalStatus: null,
    LastDegree: 7,
    Gender: 'M',
    Religion: null,
    PassportNo: null,
    BloodType: null,
    BankAccountNo: null,
    NPWPNo: null,
    NPWPDate: null,
    LastNIK: null,
    CustomerIDCBN: null,
    ProfilPict: null,
    IdCardPict: null,
    Notes: 'Tiket Join : 220103-010',
    Division: 'Chief Information Officer',
    DivisionAlias: 'Information',
    Department: 'Enterprise System Solution',
    DepartmentAlias: 'ESS',
    SubDepartment: 'Application Development',
    Group: null,
    StaffStatusName: 'PKWT',
    GenderName: 'Laki-laki',
    ReligionName: null,
    JobFunctionName: 'Application Development',
    PositionName: 'Staff',
    PositionCode: '001',
    imageBase: '',
    ImageBase: null,
    ReasonDeleted: null,
  },
];

const schemaOptions = {
  tableName: USER_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
