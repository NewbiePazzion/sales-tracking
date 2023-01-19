import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  VISIT_TRACK_MODEL_NAME,
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
} from '../fixtures/models';

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
  CaeCd: {
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
    type: Sequelize.STRING,
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

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: VISIT_TRACK_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const visitTracksModel = (sequelize) => {
  const visitTracks = sequelize.define(VISIT_TRACK_MODEL_NAME, schemaAttributes, schemaOptions);

  visitTracks.associate = () => {
  // roles.associate = (models) => {
    // // role has many permissions through role_permissions
    // roles.belongsToMany(models[PERMISSION_MODEL_NAME], {
    //   through: { model: ROLE_PERMISSION_MODEL_NAME },
    //   foreignKey: ROLE_BELONGS_TO_MANY_PERMISSION_FK,
    //   as: ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS,
    // });
    // // role has many users through user_roles
    // roles.belongsToMany(models[USER_MODEL_NAME], {
    //   through: { model: USER_ROLE_MODEL_NAME },
    //   foreignKey: ROLE_BELONGS_TO_MANY_USER_FK,
    //   as: ROLE_BELONGS_TO_MANY_USER_ALIAS,
    // });
  };

  return visitTracks;
};

export default visitTracksModel;
