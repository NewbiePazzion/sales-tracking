import Sequelize from 'sequelize';
import config from '../../config';
import {
  TABLE_META_ATTRIBUTES,
  STRACK_DATABASE,
  VISIT_TRACK_TABLE_NAME,
  PROJECT_HOME_TABLE_NAME,
  MASTER_RESIDENT_TABLE_NAME,
  MASTER_ACTIVITY_TABLE_NAME,
  MASTER_RESULT_TABLE_NAME,
  MASTER_PROVIDER_TABLE_NAME,
  MASTER_SERVICE_TABLE_NAME,
  PROJECT_YEAR_TABLE_NAME,
  LOCATION_TYPE_TABLE_NAME,
  PROJECT_NAME_TABLE_NAME,
} from '../../fixtures/models';

const { database } = config('/');
const schemaAttributes = {
  ID: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  BranchCode: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  VstTm: {
    allowNull: true,
    type: Sequelize.DATE,
  },
  Latitude: {
    allowNull: true,
    type: Sequelize.DECIMAL,
  },
  Longitude: {
    allowNull: true,
    type: Sequelize.DECIMAL,
  },
  CaeCd: { // TODO: add fk
    allowNull: true,
    type: Sequelize.STRING,
  },
  Addr: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  HomeId: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: PROJECT_HOME_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'home_id',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  Notes: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CustNm: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  PhNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ResidentTyCd: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: MASTER_RESIDENT_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'resident_ty_cd',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  ActvCd: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: MASTER_ACTIVITY_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'actv_cd',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  ResCd: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: MASTER_RESULT_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'res_cd',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  PvdCd: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: MASTER_PROVIDER_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'pvd_cd',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  OthPvdNm: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  SvcCd: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: MASTER_SERVICE_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'svc_cd',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  YearProj: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: PROJECT_YEAR_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'proj_year',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  LocTy: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: {
        tableName: LOCATION_TYPE_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'loc_ty',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  ProjId: {
    allowNull: true,
    type: Sequelize.STRING,
    references: {
      model: {
        tableName: PROJECT_NAME_TABLE_NAME,
        schema: database[STRACK_DATABASE].schema,
      },
      key: 'proj_id',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  ProjNm: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = {
  tableName: VISIT_TRACK_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
};

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(schemaOptions, schemaAttributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable(schemaOptions);
  },
};
