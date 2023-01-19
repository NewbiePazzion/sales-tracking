import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_RESIDENT_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    resident_ty_cd: 'RESI',
    resident_ty_nm: 'Residential',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    resident_ty_cd: 'RUKO',
    resident_ty_nm: 'Ruko',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    resident_ty_cd: 'CAFE',
    resident_ty_nm: 'Cafe/Resto/Warung',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    resident_ty_cd: 'COMP',
    resident_ty_nm: 'Company',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    resident_ty_cd: 'SEKO',
    resident_ty_nm: 'Sekolah',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    resident_ty_cd: 'HOTL',
    resident_ty_nm: 'Hotel/Villa',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    resident_ty_cd: 'WNET',
    resident_ty_nm: 'Warnet',
    vld_thru: '2079-06-06T00:00:00',
  },
];

const schemaOptions = {
  tableName: MASTER_RESIDENT_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
