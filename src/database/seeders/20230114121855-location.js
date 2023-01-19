import config from '../../config';
import {
  SEEDER_META_OPTIONS,
  STRACK_DATABASE,
  LOCATION_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');

const records = [
  {
    ID: 31,
    IDIntranet: 'Lokasikantor_Ariobimo',
    Ip: null,
    Port: null,
    LocationName: 'Ariobimo Tower',
    AliasLocationName: null,
    TypeAbsen: '4',
    MainLocation: 'Jakarta',
    Address1: null,
    Address2: null,
    Address3: null,
    Reference: null,
    Telp: null,
    Latitude: -6.22724,
    Longitude: 106.833402,
    Radius: 75,
    TimeZoneID: 'Asia/Jakarta',
    DistanceMeters: 68.89957061269911,
  }, {
    ID: 38,
    IDIntranet: 'Lokasikantor_Cyber2',
    Ip: null,
    Port: null,
    LocationName: 'PT. Cyberindo Aditama (Head Office)',
    AliasLocationName: 'CBN-Jakarta (Head Office)',
    TypeAbsen: '4',
    MainLocation: 'Jakarta',
    Address1: 'Cyber 2 Tower Lantai 33',
    Address2: 'Jl.HR.Rasuna Said Blok X-5 No.13',
    Address3: 'Jakarta Selatan 12950',
    Reference: '(jalur dengan Kedutaan Besar Singapore & Malaysia)',
    Telp: '021-29964900',
    Latitude: -6.226146,
    Longitude: 106.832293,
    Radius: 75,
    TimeZoneID: 'Asia/Jakarta',
    DistanceMeters: 105.57752684158037,
  },
];

const schemaOptions = {
  tableName: LOCATION_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

export default {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(schemaOptions, records, SEEDER_META_OPTIONS, { id: { autoIncrement: true } });
    // await queryInterface.sequelize.query(`ALTER SEQUENCE ${schemaOptions.schema}.${schemaOptions.tableName}_id_seq RESTART WITH ${records.length + 1};`);
  },
  down: (queryInterface) => queryInterface.bulkDelete(schemaOptions),
};
