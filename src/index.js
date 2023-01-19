import config from './config';
import logger from './config/logger';
import server from './config/express';

const { host, port } = config('/');

const TAG = 'server';

async function init() {
  const app = await server.create();
  try {
    // App listen
    await app.listen(port, host, () => {
      logger.info(`${TAG}::init`, `Server running on ${host}:${port}`);
    });
  } catch (err) {
    logger.error(`${TAG}:init`, `An error occured starting the server: ${err}.`);
    process.exit(1);
  }
}

init();
