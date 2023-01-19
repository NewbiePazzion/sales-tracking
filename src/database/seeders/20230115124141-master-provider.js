import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_PROVIDER_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    pvd_cd: 'NN',
    pvd_nm: 'NONE',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    pvd_cd: 'FM',
    pvd_nm: 'First Media',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    pvd_cd: 'INDI',
    pvd_nm: 'Indihome',
    vld_thru: '2079-06-06T00:00:00',
  },
];

const schemaOptions = {
  tableName: MASTER_PROVIDER_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
