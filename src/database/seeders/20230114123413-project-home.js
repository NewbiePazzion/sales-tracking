import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  PROJECT_HOME_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    proj_id: 'P1900043',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '11740H146.1.00859',
    loc_name: 'Jl. Nurul Huda, 10, 11740 (11740H146.1.00859)',
  }, {
    proj_id: 'P1900043',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '17510H138.1.04573',
    loc_name: 'Jl. Taman Kemuning, D20/67, 17510 (17510H138.1.04573)',
  }, {
    proj_id: 'P1900043',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '11740H144.1.00792',
    loc_name: 'Jl. Taruma Juwita Blok O, 8, 11740 (11740H144.1.00792)',
  }, {
    proj_id: 'P1900043',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '11740H000.1.00791',
    loc_name: 'Jl. Taruma Juwita Blok N, 45, 11740 (11740H000.1.00791)',
  }, {
    proj_id: 'P1801274',
    proj_nm: 'Summarecon Bekasi - partial 1-non lantai 3',
    home_id: '17142B101.1.01001',
    loc_name: 'Mall Summarecon Bekasi, Jl. Bulevar Ahmad Yani Blok M, Zona 1 , Lt GF, Lt GF 138A ATM BCA, 17142 (17142B101.1.01001)',
  },
  {
    proj_id: 'P1900044',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '11740H146.1.00860',
    loc_name: 'Jl. Nurul Huda, 10, 11740 (11740H146.1.00860)',
  }, {
    proj_id: 'P1900044',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '17510H138.1.04574',
    loc_name: 'Jl. Taman Kemuning, D20/67, 17510 (17510H138.1.04574)',
  }, {
    proj_id: 'P1900044',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '11740H144.1.00794',
    loc_name: 'Jl. Taruma Juwita Blok O, 8, 11740 (11740H144.1.00794)',
  }, {
    proj_id: 'P1900044',
    proj_nm: 'Open Area RW10 Rawa Buaya',
    home_id: '11740H000.1.00793',
    loc_name: 'Jl. Taruma Juwita Blok N, 45, 11740 (11740H000.1.00793)',
  }, {
    proj_id: 'P1801275',
    proj_nm: 'Summarecon Bekasi - partial 1-non lantai 3',
    home_id: '17142B101.1.01002',
    loc_name: 'Mall Summarecon Bekasi, Jl. Bulevar Ahmad Yani Blok M, Zona 1 , Lt GF, Lt GF 138A ATM BCA, 17142 (17142B101.1.01002)',
  },
];

const schemaOptions = {
  tableName: PROJECT_HOME_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
