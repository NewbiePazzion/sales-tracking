import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  PROJECT_YEAR_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  { proj_year: 2022 }, { proj_year: 2021 }, { proj_year: 2020 }, { proj_year: 2019 },
];

const schemaOptions = {
  tableName: PROJECT_YEAR_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
