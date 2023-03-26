import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';
import config from '../config';
import {
  TABLE_META_ATTRIBUTES,
  TABLE_META_OPTIONS,
  STRACK_DATABASE,
  USER_MODEL_NAME,
  USER_TABLE_NAME,
} from '../fixtures/models';

const { database } = config('/');

const schemaAttributes = {
  StaffCode: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  Username: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  Password: {
    allowNull: false,
    type: Sequelize.STRING,
    // set(Password) {
    //   this.setDataValue('Password', bcrypt.hashSync(Password, bcrypt.genSaltSync(8)));
    // }
  },
  Role: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  PIN: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  MaxDevice: {
    allowNull: true,
    type: Sequelize.INTEGER,
  },
  NIK: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CardID: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CardAccessNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BuildingCardId: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  AbsenType: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  IdNumber: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  NoKK: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Fullname: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ShortName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  SignInDate: {
    allowNull: true,
    type: Sequelize.DATEONLY,
  },
  StatusEmployeeCode: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BirthPlace: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BirthDate: {
    allowNull: true,
    type: Sequelize.DATEONLY,
  },
  Phone: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  HandPhone: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Email: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Address: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  City: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ZipCode: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  AddressDomisili: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CityDomisili: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ZipCodeDomisili: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Extension: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  MaritalStatus: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  LastDegree: {
    allowNull: true,
    type: Sequelize.INTEGER,
  },
  Gender: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Religion: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  PassportNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BloodType: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  BankAccountNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  NPWPNo: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  NPWPDate: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  LastNIK: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  CustomerIDCBN: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ProfilPict: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  IdCardPict: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Notes: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Division: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  DivisionAlias: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Department: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  DepartmentAlias: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  SubDepartment: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  Group: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  StaffStatusName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  GenderName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ReligionName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  JobFunctionName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  PositionName: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  PositionCode: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  imageBase: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ImageBase: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ReasonDeleted: {
    allowNull: true,
    type: Sequelize.STRING,
  },
  ...TABLE_META_ATTRIBUTES,
};

const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
  tableName: USER_TABLE_NAME,
  schema: database[STRACK_DATABASE].schema,
});

const usersModel = (sequelize) => {
  const users = sequelize.define(USER_MODEL_NAME, schemaAttributes, schemaOptions);

  users.beforeCreate((value) => {
    // eslint-disable-next-line no-param-reassign
    value.Username = value.Username.toLowerCase();
    // eslint-disable-next-line no-param-reassign
    if (value.Password) value.Password = bcrypt.hashSync(value.Password, bcrypt.genSaltSync(8));
  });
  users.beforeUpdate((value) => {
    // eslint-disable-next-line no-param-reassign
    if (value.Username) value.Username = value.Username.toLowerCase();
    // eslint-disable-next-line no-param-reassign
    // if (value.Password) value.Password = bcrypt.hashSync(value.Password, bcrypt.genSaltSync(8));
  });

  // eslint-disable-next-line func-names
  users.prototype.validatePassword = async function (password) {
    return bcrypt.compare(password, this.Password);
  };

  users.associate = () => {};

  return users;
};

export default usersModel;

// import bcrypt from 'bcrypt';
// import Sequelize from 'sequelize';
// import config from '../config';
// import {
//   TABLE_META_ATTRIBUTES,
//   TABLE_META_OPTIONS,
//   STRACK_DATABASE,
//   USER_MODEL_NAME,
//   USER_TABLE_NAME,
//   USER_BELONGS_TO_MANY_ROLE_FK,
//   USER_BELONGS_TO_MANY_ROLE_ALIAS,
//   ROLE_MODEL_NAME,
//   USER_ROLE_MODEL_NAME,
// } from '../fixtures/models';

// const { database } = config('/');

// const schemaAttributes = {
//   id: {
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true,
//     type: Sequelize.INTEGER,
//   },
//   full_name: {
//     allowNull: false,
//     type: Sequelize.STRING,
//   },
//   email: {
//     allowNull: false,
//     unique: true,
//     type: Sequelize.STRING,
//   },
//   username: {
//     allowNull: false,
//     unique: true,
//     type: Sequelize.STRING,
//   },
//   password: {
//     allowNull: false,
//     type: Sequelize.STRING,
//   },
//   birthdate: {
//     allowNull: true,
//     type: Sequelize.DATE,
//   },
//   address: {
//     allowNull: true,
//     type: Sequelize.STRING,
//   },
//   privacy_policy: {
//     allowNull: false,
//     type: Sequelize.STRING,
//   },
//   ...TABLE_META_ATTRIBUTES,
// };

// const schemaOptions = Object.assign(TABLE_META_OPTIONS, {
//   tableName: USER_TABLE_NAME,
//   schema: database[STRACK_DATABASE].schema,
// });

// const usersModel = (sequelize) => {
//   const users = sequelize.define(USER_MODEL_NAME, schemaAttributes, schemaOptions);

//   users.beforeCreate((value) => {
//     // eslint-disable-next-line no-param-reassign
//     value.username = value.username.toLowerCase();
//     if (value.password) {
//       // eslint-disable-next-line no-param-reassign
//       value.password = bcrypt.hashSync(value.password, bcrypt.genSaltSync(8));
//     }
//   });
//   users.beforeUpdate((value) => {
//     // eslint-disable-next-line no-param-reassign
//     if (value.username) value.username = value.username.toLowerCase();
//     // eslint-disable-next-line no-param-reassign
//     if (value.password) value.password = bcrypt.hashSync(value.password, bcrypt.genSaltSync(8));
//   });

//   // eslint-disable-next-line func-names
//   users.prototype.validatePassword = async function (password) {
//     return bcrypt.compare(password, this.password);
//   };

//   users.associate = (models) => {
//     // user belongs to role
//     users.belongsToMany(models[ROLE_MODEL_NAME], {
//       through: { model: USER_ROLE_MODEL_NAME },
//       foreignKey: USER_BELONGS_TO_MANY_ROLE_FK,
//       as: USER_BELONGS_TO_MANY_ROLE_ALIAS,
//     });
//   };
//   return users;
// };

// export default usersModel;
