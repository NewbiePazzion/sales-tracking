import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_SERVICE_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    svc_cd: 'NN',
    svc_nm: 'NONE',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JJ',
    svc_nm: 'CBN Fiber 10',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JK',
    svc_nm: 'CBN Fiber 15 Combo',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JB',
    svc_nm: 'CBN Fiber 20',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JE',
    svc_nm: 'CBN Fiber 30 Combo',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JC',
    svc_nm: 'CBN Fiber 50',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JI',
    svc_nm: 'CBN Fiber 60',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JF',
    svc_nm: 'CBN Fiber 60 Combo',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JG',
    svc_nm: 'CBN Fiber 100 Combo',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'JH',
    svc_nm: 'CBN Fiber 1G Combo',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    svc_cd: 'DO',
    svc_nm: 'CBN Dedicated-On-Demand',
    vld_thru: '2079-06-06T00:00:00',
  },
];

const schemaOptions = {
  tableName: MASTER_SERVICE_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
