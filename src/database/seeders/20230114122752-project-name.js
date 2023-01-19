import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  PROJECT_NAME_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    proj_id: 'P1700364',
    proj_nm: 'Apt. Taman Kemayoran Condominium',
    proj_year: 2021,
    loc_ty: 99,
  }, {
    proj_id: 'P1900043',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    proj_year: 2021,
    loc_ty: 99,
  }, {
    proj_id: 'P1801274',
    proj_nm: 'Summarecon Bekasi - partial 1-non lantai 3',
    proj_year: 2022,
    loc_ty: 2,
  },
];

const schemaOptions = {
  tableName: PROJECT_NAME_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
