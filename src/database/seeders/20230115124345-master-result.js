import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_RESULT_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    res_cd: 'XTHER',
    res_nm: 'Customer tidak di tempat',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'XINTR',
    res_nm: 'Customer tidak berminat',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'OTISP',
    res_nm: 'Sudah menggunakan ISP lain',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'DISCS',
    res_nm: 'Pikir-pikir/Diskusi dengan pemilik/Keluarga',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'EXPSV',
    res_nm: 'Kemahalan',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'EMPTY',
    res_nm: 'Rumah kosong/Dijual/Dikontrakan',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'ACTIV',
    res_nm: 'Sudah aktif di CBN',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'CLOSE',
    res_nm: 'Closing',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    res_cd: 'NOTFN',
    res_nm: 'Rumah tidak ditemukan',
    vld_thru: '2079-06-06T00:00:00',
  },
];

const schemaOptions = {
  tableName: MASTER_RESULT_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
