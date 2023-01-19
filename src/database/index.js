import config from '../config';
import { STRACK_DATABASE } from '../fixtures/models';

const { database } = config('/');
const gLibraryDb = database[STRACK_DATABASE];

module.exports = { dev: gLibraryDb };
