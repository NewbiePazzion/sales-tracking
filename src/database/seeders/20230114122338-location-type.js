import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  LOCATION_TYPE_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    loc_ty: 99,
    loc_ty_nm: 'Open Area',
  }, {
    loc_ty: 2,
    loc_ty_nm: 'Ruko / Mall',
  }, {
    loc_ty: 5,
    loc_ty_nm: 'Fiber Broadband (Landed)',
  },
];

const schemaOptions = {
  tableName: LOCATION_TYPE_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
