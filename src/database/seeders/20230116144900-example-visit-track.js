import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  VISIT_TRACK_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    ID: 1,
    BranchCode: '00',
    VstTm: '04/27/2022 11:36',
    Latitude: -6.2264177,
    Longitude: 106.8323461,
    CaeCd: 'gradi',
    Addr: 'Mall Summarecon Bekasi, Jl. Bulevar Ahmad Yani Blok M, Zona 1 , Lt GF, Lt GF 138A ATM BCA, 17142 (17142B101.1.01001)',
    HomeId: '17142B101.1.01001',
    Notes: 'Testing Mobile Apps',
    CustNm: 'Putra',
    PhNo: '08126666888',
    ResidentTyCd: 'RESI',
    ActvCd: 'BROC',
    ResCd: 'OTISP',
    PvdCd: 'FM',
    OthPvdNm: ' ',
    SvcCd: 'JJ',
    YearProj: 2022,
    LocTy: 2,
    ProjId: 'P1801274',
    ProjNm: 'Summarecon Bekasi - partial 1-non lantai 3',
  },
];

const schemaOptions = {
  tableName: VISIT_TRACK_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_ID_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
