import Sequelize from 'sequelize';

export const TABLE_META_CREATED_AT = 'created_at';
export const TABLE_META_CREATED_BY = 'created_by';
export const TABLE_META_UPDATED_AT = 'updated_at';
export const TABLE_META_UPDATED_BY = 'updated_by';
export const TABLE_META_DELETED_AT = 'deleted_at';
export const TABLE_META_DELETED_BY = 'deleted_by';
export const TABLE_META_ATTRIBUTES = {
  createdAt: { type: Sequelize.DATE, field: TABLE_META_CREATED_AT, defaultValue: Sequelize.literal('NOW()') },
  createdBy: { type: Sequelize.STRING, field: TABLE_META_CREATED_BY, defaultValue: 'SYSTEM' },
  updatedAt: { type: Sequelize.DATE, field: TABLE_META_UPDATED_AT, defaultValue: Sequelize.literal('NOW()') },
  updatedBy: { type: Sequelize.STRING, field: TABLE_META_UPDATED_BY, defaultValue: 'SYSTEM' },
  deletedAt: { type: Sequelize.DATE, field: TABLE_META_DELETED_AT },
  deletedBy: { type: Sequelize.STRING, field: TABLE_META_DELETED_BY },
};
// export const TABLE_META_OPTIONS = { timestamps: true, paranoid: true, underscored: true };
export const TABLE_META_OPTIONS = { timestamps: true, paranoid: true, underscored: false };
export const SEEDER_META_OPTIONS = { validate: true, hooks: true, individualHooks: true };
export const FOREIGN_KEY_CONSTRAINT = { onUpdate: 'CASCADE', onDelete: 'SET NULL', constraints: true };

// DATABASE
export const STRACK_DATABASE = 'strack-db';

/**
 * ====================================================
 *                      MODELS
 * ====================================================
 */

// MENU
export const MENU_MODEL_NAME = 'Menu';
export const MENU_TABLE_NAME = 'menus';
export const MENU_HAS_MANY_PERMISSION_FK = 'menu_id';
export const MENU_HAS_MANY_PERMISSION_ALIAS = 'permissions';

// PERMISSION
export const PERMISSION_MODEL_NAME = 'Permission';
export const PERMISSION_TABLE_NAME = 'permissions';
export const PERMISSION_BELONGS_TO_MENU_FK = 'menu_id';
export const PERMISSION_BELONGS_TO_MENU_ALIAS = 'menu';
export const PERMISSION_BELONGS_TO_MANY_ROLE_FK = 'permission_id';
export const PERMISSION_BELONGS_TO_MANY_ROLE_ALIAS = 'roles';

// ROLE
export const ROLE_MODEL_NAME = 'Role';
export const ROLE_TABLE_NAME = 'roles';
export const ROLE_BELONGS_TO_MANY_PERMISSION_FK = 'role_id';
export const ROLE_BELONGS_TO_MANY_PERMISSION_ALIAS = 'permissions';
export const ROLE_BELONGS_TO_MANY_USER_FK = 'role_id';
export const ROLE_BELONGS_TO_MANY_USER_ALIAS = 'users';
export const ROLE_HAS_MANY_USER_ROLE_FK = 'role_id';
export const ROLE_HAS_MANY_USER_ROLE_ALIAS = 'userRoles';

// ROLE_PERMISSION
export const ROLE_PERMISSION_MODEL_NAME = 'RolePermission';
export const ROLE_PERMISSION_TABLE_NAME = 'role_permissions';

// USER
export const USER_MODEL_NAME = 'User';
export const USER_TABLE_NAME = 'users';
// export const USER_BELONGS_TO_MANY_ROLE_FK = 'user_id';
// export const USER_BELONGS_TO_MANY_ROLE_ALIAS = 'roles';

// USER_ROLE
export const USER_ROLE_MODEL_NAME = 'UserRole';
export const USER_ROLE_TABLE_NAME = 'user_roles';
export const USER_ROLE_BELONGS_TO_USER_FK = 'user_id';
export const USER_ROLE_BELONGS_TO_USER_ALIAS = 'user';
export const USER_ROLE_BELONGS_TO_ROLE_FK = 'role_id';
export const USER_ROLE_BELONGS_TO_ROLE_ALIAS = 'role';

// EMPLOYEE
export const EMPLOYEE_MODEL_NAME = 'Employee';
export const EMPLOYEE_TABLE_NAME = 'employees';

// LOCATION
export const LOCATION_MODEL_NAME = 'Location';
export const LOCATION_TABLE_NAME = 'locations';

// PROJECT YEAR
export const PROJECT_YEAR_MODEL_NAME = 'ProjectYear';
export const PROJECT_YEAR_TABLE_NAME = 'project_years';

// LOCATION TYPE
export const LOCATION_TYPE_MODEL_NAME = 'LocationType';
export const LOCATION_TYPE_TABLE_NAME = 'location_types';

// PROJECT NAME
export const PROJECT_NAME_MODEL_NAME = 'ProjectName';
export const PROJECT_NAME_TABLE_NAME = 'project_names';

// PROJECT HOME
export const PROJECT_HOME_MODEL_NAME = 'ProjectHome';
export const PROJECT_HOME_TABLE_NAME = 'project_homes';

// MASTER ACTIVITY
export const MASTER_ACTIVITY_MODEL_NAME = 'MasterActivity';
export const MASTER_ACTIVITY_TABLE_NAME = 'master_activities';

// MASTER SERVICE
export const MASTER_SERVICE_MODEL_NAME = 'MasterService';
export const MASTER_SERVICE_TABLE_NAME = 'master_services';

// MASTER PROVIDER
export const MASTER_PROVIDER_MODEL_NAME = 'MasterProvider';
export const MASTER_PROVIDER_TABLE_NAME = 'master_providers';

// MASTER RESULT
export const MASTER_RESULT_MODEL_NAME = 'MasterResult';
export const MASTER_RESULT_TABLE_NAME = 'master_results';

// MASTER RESIDENT
export const MASTER_RESIDENT_MODEL_NAME = 'MasterResident';
export const MASTER_RESIDENT_TABLE_NAME = 'master_residents';

// VISIT TRACK
export const VISIT_TRACK_MODEL_NAME = 'VisitTrack';
export const VISIT_TRACK_TABLE_NAME = 'visit_tracks';

/**
 * ====================================================
 *                 ATTRIBUTES/COLUMN NAME
 * ====================================================
 */

// USER
export const USER_ID = 'id';
export const USER_AUTH_ATTRIBUTES = ['id', 'username', 'password'];
export const USER_PASSWORD = 'password';
