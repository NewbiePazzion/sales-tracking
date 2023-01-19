import crypto from 'crypto';
import multer from 'multer';

import config from '../config';
import FilesystemError from '../exceptions/filesystemError';
import PayloadTooLargeError from '../exceptions/payloadTooLargeError';
import ForbiddenFileTypeError from '../exceptions/forbiddenFileTypeError';

const { filesystems } = config('/');
const storageRootDir = filesystems.disks[filesystems.default].root;

const errors = {
  LIMIT_FILE_SIZE: {
    // ?[FORMAT] <namespace>: new <Error Class>
    default: () => new PayloadTooLargeError(),
  },
};

/**
 * Handle an incoming request
 *
 * @param {String} namespace route namespace
 * @param {String} options.dir Directory destination
 * @param {Boolean} options.randomFilename Whether the filename should be random or use original
 * @param {Number} options.limits File limits
 * @param {Function} options.filter File filter function
 * @param {Function} options.strategy multer strategy function
 *
 * @return {Function}
 */
const handler = (namespace, options = {}) => {
  const nmspace = namespace || 'default';
  const dir = options.dir || storageRootDir;
  const limits = options.limits || 1;
  const filter = options.filter || (() => true);
  const randomFilename = options.randomFilename !== undefined ? options.randomFilename : true;

  // create multer instance
  const instance = multer({
    limits,
    fileFilter: (req, file, callback) => {
      if (filter(file.mimetype)) return callback(null, true);
      return callback(new ForbiddenFileTypeError({ type: file.mimetype }));
    },
    storage: multer.diskStorage({
      destination: (req, file, callback) => { callback(null, dir); },
      filename: (req, file, callback) => {
        if (!randomFilename) return callback(null, file.originalname);
        const ext = file.originalname.split('.').pop();
        return crypto.pseudoRandomBytes(16, (err, raw) => {
          callback(err, err ? undefined : `${raw.toString('hex')}.${ext}`);
        });
      },
    }),
  });

  const strategy = options.strategy ? options.strategy(instance) : instance.single('file');
  return (req, res, next) => {
    strategy(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        const error = errors[err.code][nmspace]();
        return next(error);
      }

      if (err) {
        const error = new FilesystemError({ error: err });
        return next(error);
      }

      return next();
    });
  };
};

export default handler;
