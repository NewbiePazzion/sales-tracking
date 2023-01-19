const errorDetails = (o) => `The error is "${o.error}"`;

/* === INTERNAL_SERVER_ERROR 500 === */

// Unknown Error: 50000
export const UNKNOWN_ERROR = {
  ERROR: 50000,
  CODE: 'UNKNOWN_ERROR',
  LABEL: 'Unknown Error',
  MESSAGE: (o) => `There was a problem in the server. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem in the server.',
};

// API Error: 50001
export const API_ERROR = {
  ERROR: 50001,
  CODE: 'API_ERROR',
  LABEL: 'API Error',
  MESSAGE: (o) => `There was a problem while trying to request an API of "${o.request}". The error is "${o.errorName}"`,
  DESCRIPTION: 'There was a problem while trying to request an API.',
};

// Repository Error: 50002
export const REPOSITORY_ERROR = {
  ERROR: 50002,
  CODE: 'REPOSITORY_ERROR',
  LABEL: 'Repository Error',
  MESSAGE: (o) => `There was a problem while accessing data source of "${o.domainObject}". ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem while accessing data source.',
};

// Database Error: 50010
export const DB_ERROR = {
  ERROR: 50010,
  CODE: 'DB_ERROR',
  LABEL: 'Database Error',
  MESSAGE: (o) => `There was a problem while querying table "${o.table}" in database. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem while querying into database.',
};

// Database Transaction Error: 50011
export const DB_TRANSACTION_ERROR = {
  ERROR: 50011,
  CODE: 'DB_TRANSACTION_ERROR',
  LABEL: 'Database Transaction Error',
  MESSAGE: (o) => `There was a problem while querying table "${o.table}" (with transaction) in database and will be rollback automatically. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem while querying (with transaction) into database.',
};

// Auth Error: 50020
export const AUTH_ERROR = {
  ERROR: 50020,
  CODE: 'AUTH_ERROR',
  LABEL: 'Authentication Error',
  MESSAGE: (o) => `There was a problem while to authenticate. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem while trying to authenticate.',
};

// Filesystem Error: 50030
export const FILESYSTEM_ERROR = {
  ERROR: 50030,
  CODE: 'FILESYSTEM_ERROR',
  LABEL: 'Filesytem Error',
  MESSAGE: (o) => `There was a problem with filesystem. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem with filesystem.',
};

// Rename File Error: 50031
export const RENAME_FILE_ERROR = {
  ERROR: 50031,
  CODE: 'RENAME_FILE_ERROR ',
  LABEL: 'Rename File Error',
  MESSAGE: (o) => `Failed to rename a file from "${o.from}" into "${o.to}". ${errorDetails(o)}`,
  DESCRIPTION: 'Failed to rename a file.',
};

// Move File Error: 50032
export const MOVE_FILE_ERROR = {
  ERROR: 50032,
  CODE: 'MOVE_FILE_ERROR ',
  LABEL: 'Move File Error',
  MESSAGE: (o) => `Failed to move a file from "${o.from}" into "${o.to}". ${errorDetails(o)}`,
  DESCRIPTION: 'Failed to move a file.',
};

// Excel Generate Error: 50040
export const EXCEL_GENERATE_ERROR = {
  ERROR: 50040,
  CODE: 'EXCEL_GENERATE_ERROR',
  LABEL: 'Excel Generate Error',
  MESSAGE: (o) => `There was a problem while generating an excel file of "${o.filename}". ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem while generating an excel file.',
};

// Firebase Error: 50050
export const FIREBASE_ERROR = {
  ERROR: 50050,
  CODE: 'FIREBASE_ERROR',
  LABEL: 'Firebase Error',
  MESSAGE: (o) => `There was a problem with firebase app. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem with firebase app.',
};

// Firebase Messaging Error: 50051
export const FIREBASE_MESSAGING_ERROR = {
  ERROR: 50051,
  CODE: 'FIREBASE_MESSAGING_ERROR',
  LABEL: 'Firebase Messaging Error',
  MESSAGE: (o) => `There was a problem with firebase messaging module. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem with firebase messaging module.',
};

// Sendbird Error: 50080
export const SENDBIRD_ERROR = {
  ERROR: 50080,
  CODE: 'SENDBIRD_ERROR',
  LABEL: 'Sendbird Error',
  MESSAGE: (o) => `There was a problem with sendbird app. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem with sendbird app.',
};

// Moca Error: 50090
export const MOCA_ERROR = {
  ERROR: 50090,
  CODE: 'MOCA_ERROR',
  LABEL: 'Moca Error',
  MESSAGE: (o) => `There was a problem with moca app. ${errorDetails(o)}`,
  DESCRIPTION: 'There was a problem with moca app.',
};

/* === BAD REQUEST 400 === */

// Bad Request Error: 40000
export const BAD_REQUEST_ERROR = {
  ERROR: 40000,
  CODE: 'BAD_REQUEST_ERROR',
  LABEL: 'Bad Request Error',
  MESSAGE: (o) => `The server cannot or will not process the request. ${errorDetails(o)}`,
  DESCRIPTION: 'The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).',
};

// Insufficient Stock Error: 40001
export const INSUFFICIENT_STOCK_ERROR = {
  ERROR: 40001,
  CODE: 'INSUFFICIENT_STOCK_ERROR',
  LABEL: 'Insufficient Stock Error',
  MESSAGE: (o) => `Insufficient stock for product "${o.product}" in this transaction. ${errorDetails(o)}`,
  DESCRIPTION: 'Insufficient stock for this transaction.',
};

/* === UNAUTHORIZED 401 === */

// Unauthorized Error: 40100
export const UNAUTHORIZED_ERROR = {
  ERROR: 40100,
  CODE: 'UNAUTHORIZED_ERROR',
  LABEL: 'Unauthorized Error',
  MESSAGE: (o) => `You are unauthorized. ${errorDetails(o)}`,
  DESCRIPTION: 'You are unauthorized.',
};

// Logged in another device Error: 40101
export const LOGGED_IN_ANOTHER_DEVICE_ERROR = {
  ERROR: 40101,
  CODE: 'LOGGED_IN_ANOTHER_DEVICE_ERROR',
  LABEL: 'Logged in Another Device Error',
  MESSAGE: (o) => `Failed to refresh the token due to user has logged in to another device. ${errorDetails(o)}`,
  DESCRIPTION: 'You are unauthorized.',
};

// Invalid Credentials: 40110
export const INVALID_CREDENTIALS = {
  ERROR: 40110,
  CODE: 'INVALID_CREDENTIALS',
  LABEL: 'Invalid Credentials',
  MESSAGE: (o) => `These credentials do not match. ${errorDetails(o)}`,
  DESCRIPTION: 'These credentials do not match.',
};

// Invalid Password: 40102
export const INVALID_PASSWORD = {
  ERROR: 40102,
  CODE: 'INVALID_PASSWORD',
  LABEL: 'Invalid Password',
  MESSAGE: (o) => `Your user or password is incorrect. ${errorDetails(o)}`,
  DESCRIPTION: 'Your user or password is incorrect.',
};

/* === FORBIDDEN 403 === */

// Forbidden: 40300
export const FORBIDDEN = {
  ERROR: 40300,
  CODE: 'FORBIDDEN',
  LABEL: 'Forbidden',
  MESSAGE: (o) => `You don't have any of the necessary access rights for role "${o.roleName}" to access ${o.origin}.`,
  DESCRIPTION: 'You don\'t have any of the necessary access rights.',
};

// Forbidden File Type: 40310
export const FORBIDDEN_FILE_TYPE = {
  ERROR: 40310,
  CODE: 'FORBIDDEN_FILE_TYPE',
  LABEL: 'Forbidden File Type',
  MESSAGE: (o) => `You are not allowed to upload this file type of "${o.type}".`,
  DESCRIPTION: 'You are not allowed to upload this file type.',
};

// User Permission Forbidden : 40330
export const USER_FORBIDDEN_ACCESS = {
  ERROR: 40330,
  CODE: 'USER_FORBIDDEN_ACCESS',
  LABEL: 'User Forbidden Access',
  MESSAGE: (o) => `You have no access currently in this system with account "${o.username}", please contact IT Helpdesk.`,
  DESCRIPTION: 'You have no access currently in this system, please contact IT Helpdesk.',
};

// Unregistered User Forbidden : 40340
export const UNREGISTERED_USER_FORBIDDEN_LOGIN = {
  ERROR: 40340,
  CODE: 'UNREGISTERED_USER_FORBIDDEN_LOGIN',
  LABEL: 'Unregistered User Forbidden Login',
  MESSAGE: (o) => `You are not granted yet in this system with account "${o.username}", please contact IT Helpdesk.`,
  DESCRIPTION: 'You are not granted yet in this system, please contact IT Helpdesk.',
};

/* === NOT_FOUND 404 === */

// Empty Result: 40400
export const EMPTY_RESULT = {
  ERROR: 40400,
  CODE: 'EMPTY_RESULT',
  LABEL: 'Empty Result',
  MESSAGE: (o) => `No results found of "${o.dataKey}".`,
  DESCRIPTION: 'No results found.',
};

// Database Empty Result: 40410
export const DB_EMPTY_RESULT = {
  ERROR: 40410,
  CODE: 'DB_EMPTY_RESULT',
  LABEL: 'Database Empty Result',
  MESSAGE: (o) => `No results found during querying table "${o.table}" in database.`,
  DESCRIPTION: 'No results found during querying into database.',
};

/* === PAYLOAD_TOO_LARGE 413 === */

// Payload Too Large Error: 41300
export const PAYLOAD_TOO_LARGE_ERROR = {
  ERROR: 41300,
  CODE: 'PAYLOAD_TOO_LARGE_ERROR',
  LABEL: 'Payload Too Large Error',
  MESSAGE: () => 'Can\'t process the request because payload too large.',
  DESCRIPTION: 'Can\'t process the request because payload too large.',
};

// Product image Attachment Too Large Error: 41301
export const PRODUCT_IMAGE_TOO_LARGE_ERROR = {
  ERROR: 41301,
  CODE: 'PRODUCT_IMAGE_TOO_LARGE_ERROR',
  LABEL: 'Product Image Too Large Error',
  MESSAGE: () => 'Can\'t upload product image because file is too large.',
  DESCRIPTION: 'Can\'t upload product image because file is too large.',
};

// Customer NRIC image Attachment Too Large Error: 41302
export const CUSTOMER_NRIC_TOO_LARGE_ERROR = {
  ERROR: 41302,
  CODE: 'CUSTOMER_NRIC_TOO_LARGE_ERROR',
  LABEL: 'Customer NRIC Too Large Error',
  MESSAGE: () => 'Can\'t upload customer nric because file is too large.',
  DESCRIPTION: 'Can\'t upload customer nric because file is too large.',
};

// Media Too Large Error: 41307
export const MEDIA_TOO_LARGE_ERROR = {
  ERROR: 41307,
  CODE: 'MEDIA_TOO_LARGE_ERROR',
  LABEL: 'Media Too Large Error',
  MESSAGE: () => 'Can\'t upload media because file is too large.',
  DESCRIPTION: 'Can\'t upload media because file is too large.',
};

// Issue Activity Attachment Too Large Error: 41308
export const ISSUE_ACTIVITY_TOO_LARGE_ERROR = {
  ERROR: 41308,
  CODE: 'ISSUE_ACTIVITY_TOO_LARGE_ERROR',
  LABEL: 'Issue Activity Attachment Too Large Error',
  MESSAGE: () => 'Can\'t upload attachment because file is too large.',
  DESCRIPTION: 'Can\'t upload attachment because file is too large.',
};

// Issue Activity Attachment Too Large Error: 41309
export const USER_AVATAR_TOO_LARGE_ERROR = {
  ERROR: 41309,
  CODE: 'USER_AVATAR_TOO_LARGE_ERROR',
  LABEL: 'User Avatar Too Large Error',
  MESSAGE: () => 'Can\'t upload avatar because file is too large.',
  DESCRIPTION: 'Can\'t upload avatar because file is too large.',
};

/* === UNPROCESSABLE_ENTITY 422 === */

// Validation Error: 42200
export const VALIDATION_ERROR = {
  ERROR: 42200,
  CODE: 'VALIDATION_ERROR',
  LABEL: 'Validation Error',
  MESSAGE: (o) => `Can't process the entity due to invalid data. The details are "${o.details}".`,
  DESCRIPTION: 'Can\'t process the entity due to invalid data.',
};

// Database Validation Error: 42210
export const DB_VALIDATION_ERROR = {
  ERROR: 42210,
  CODE: 'DB_VALIDATION_ERROR',
  LABEL: 'Database Validation Error',
  MESSAGE: (o) => `Can't process the entity due to invalid data at table "${o.table}". ${errorDetails(o)}.`,
  DESCRIPTION: 'Can\'t process the entity due to invalid data.',
};
