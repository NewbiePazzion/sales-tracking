import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  MASTER_ACTIVITY_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    actv_cd: 'BROC',
    actv_nm: 'Send Brochure',
    vld_thru: '2079-06-06T00:00:00',
  }, {
    actv_cd: 'PROB',
    actv_nm: 'Probing',
    vld_thru: '2079-06-06T00:00:00',
  },
];

const schemaOptions = {
  tableName: MASTER_ACTIVITY_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
