/**
 * ====================================================
 *                   API URLS
 * ====================================================
 */

// STATUS
export const API_STATUS = '/status';

// DOCS
export const API_DOCS = '/docs';
export const API_DOCS_SWAGGER = `${API_DOCS}/swagger.json`;

// USERS
export const API_USERS = '/users';
export const API_USERS_WITH_ID = `${API_USERS}/:id`;
// export const API_USERS_WITH_UUID = `${API_USERS}/:uuid`;
export const API_USERS_PROFILE = `${API_USERS}/me`;

// AUTH
export const API_AUTH = '/auth';
export const API_AUTH_LOGIN = `${API_AUTH}/login`;
export const API_AUTH_REFRESH_TOKEN = `${API_AUTH}/refresh-token`;

// LOCATION
export const API_LOCATION = '/locations';

// PROJECT YEAR
export const API_PROJECT_YEAR = '/projectYears';

// LOCATION TYPE
export const API_LOCATION_TYPE = '/locationTypes';

// PROJECT NAME
export const API_PROJECT_NAME = '/projectNames';

// PROJECT HOME
export const API_PROJECT_HOME = '/projectHomes';

// MASTER
export const API_MASTER = '/masters';

// VISIT TRACK
export const API_VISIT_TRACK = '/visitTracks';
