import Joi from 'joi';
import momentTz from 'moment-timezone';

import { TIMEZONE, DATE_FORMAT } from '../fixtures/models';

/**
 * Zip into an object that accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 *
 * @return {Object}
 *
 */
export const zipObject = (props = [], values = []) => (
  props.reduce((prev, prop, i) => (
    Object.assign(prev, { [prop]: values[i] })
  ), {})
);

/**
 * Gets the value at path of value.
 * If the resolved value is undefined, the defaultValue is returned in its place.
 *
 * @param {Object} value The object to query.
 * @param {Array|String} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for undefined resolved values.
 *
 * @return {*}
 *
 */
export const get = (value, path, defaultValue) => {
  const result = String(path).split('.').reduce((acc, v) => {
    try {
      return acc[v];
    } catch (e) {
      return defaultValue;
    }
  }, value);
  return result === undefined ? defaultValue : result;
};

/**
 * Check every element of array.
 * If has same element, the element just will be return once.
 *
 * @param {Array} array The array will check.
 *
 * @return {Array}
 *
 */
export const unique = (array) => {
  const result = array.filter((elem, pos) => array.indexOf(elem) === pos);
  return result;
};

/**
 * Wrap a function with Promise.
 *
 * @param {Function} nodeFn Node Function
 * @param {any} args Arguments
 *
 * @return {Promise}
 *
 */
export const wrapPromise = (nodeFn, args) => {
  const promise = new Promise((resolve) => resolve(nodeFn(...args)));
  promise.catch(() => {});
  return promise;
};

/**
 * Checks if value is type of Object.
 *
 * @param {*} value The value to check.
 *
 * @return {Boolean}
 *
 */
export const isObject = (value) => value === Object(value);

/**
 * Excluding an array by given values.
 *
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 *
 * @return {Array}
 *
 */
export const arrayExclude = (array, values) => {
  const result = array.filter((o) => !values.includes(o));
  return result;
};

/**
 * Excluding an array by given index.
 *
 * @param {Array} array The array to inspect.
 * @param {Array} indexs The index to exclude.
 *
 * @return {Array}
 *
 */
export const arrayIndexExclude = (array, indexes) => {
  const result = array.filter((o, i) => !indexes.includes(i));
  return result;
};

/**
 * Convert string into integer.
 *
 * @param {String} value The value to convert.
 *
 * @return {Integer}
 *
 */
export const stringToInt = (value) => parseInt(value, 10);

/**
 * Creates an object composed of keys generated from the results of running
 * each element of collection thru iteratee. The order of grouped values is
 * determined by the order they occur in collection. The corresponding value
 * of each key is an array of elements responsible for generating the key.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array} collection The collection to iterate over.
 * @param {String|Function} iteratee The iteratee to transform keys.
 *
 * @return {Object}
 *
 */
export const groupBy = (collection, iteratee) => (
  collection.reduce((acc, value) => {
    const key = (typeof (iteratee) === 'function')
      ? iteratee(value) : value[iteratee];
    (acc[key] = acc[key] || []).push(value);
    return acc;
  }, {})
);

/**
 * Convert object values to string
 *
 * @param {Object} object The object to convert.
 *
 * @return {Object}
 */
export const objectToString = (object) => {
  const results = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    results[key] = isObject(value)
      ? JSON.stringify(value) : String(value);
  });

  return results;
};

/**
 * Creates an array of elements, ordered in ascending order (by default)
 * by the results of running each element in a collection thru each iteratee.
 * Specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @param {Array} collection The collection to iterate over.
 * @param {Function} iteratees The iteratees to order by.
 * @param {String} [orders='ASC'] The sort orders of key.
 *
 * @return {*}
 *
 */
export const orderBy = (collection, iteratees, orders = 'ASC') => {
  let compareFn = (a, b) => {
    if (iteratees(a) > iteratees(b)) { return 1; }
    return (iteratees(b) > iteratees(a)) ? -1 : 0;
  };
  if (orders === 'DESC') {
    compareFn = (a, b) => {
      if (iteratees(a) > iteratees(b)) { return -1; }
      return (iteratees(b) > iteratees(a)) ? 1 : 0;
    };
  }
  return collection.concat().sort(compareFn);
};

/**
 * Checks if file mime type is classified as a image file.
 *
 * @param {String} mimeType mimetype
 *
 * @return {Boolean}
 *
 */
export const isImageFile = (mimeType) => (
  mimeType.startsWith('image')
);

/**
 * Checks if file mime type is classified as a multimedia file.
 *
 * @param {String} mimeType mimetype
 *
 * @return {Boolean}
 *
 */
export const isMultimediaFile = (mimeType) => (
  mimeType.startsWith('image') || mimeType.startsWith('video')
);

/**
 * Checks if file mime type is classified as a document file.
 *
 * @param {String} mimeType mimetype
 *
 * @return {Boolean}
 *
 */
export const isDocumentFile = (mimeType) => (
  mimeType.endsWith('pdf')
  || mimeType.endsWith('vnd.ms-powerpoint') || mimeType.endsWith('vnd.openxmlformats-officedocument.presentationml.presentation')
  || mimeType.endsWith('msword') || mimeType.endsWith('vnd.openxmlformats-officedocument.wordprocessingml.document')
  || mimeType.endsWith('vnd.ms-excel') || mimeType.endsWith('vnd.openxmlformats-officedocument.spreadsheetml.sheet')
);

/**
 * Checks if given string is valid UUIDv4
 *
 * @param {String} uuid uuidv4
 *
 * @return {Boolean}
 *
 */
export const isUUIDv4 = (uuid) => {
  const validation = Joi.string().guid({ version: 'uuidv4' });
  const result = validation.validate(uuid);
  return result.error === undefined;
};

/**
 * Checks if given string is valid id
 *
 * @param {String} id id
 *
 * @return {Boolean}
 *
 */
export const isId = (id) => {
  const validation = Joi.string().regex(/^\d+$/);
  const result = validation.validate(id);
  return result.error === undefined;
};

/**
 * Truncates string if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with "...".
 *
 * @param {String} string The string to truncate
 * @param {Number} length The maximum string length
 *
 * @return {Boolean}
 *
 */
export const truncate = (string, length) => {
  if (string.length > length) return `${string.substring(0, length - 3)}...`;
  return string;
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

/**
* Returns a random integer between min (inclusive) and max (inclusive).
* The value is no lower than min (or the next integer greater than min
* if min isn't an integer) and no greater than max (or the next integer
* lower than max if max isn't an integer).
* Using Math.round() will give you a non-uniform distribution!
*/
export const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

/**
 * Checks if path is a direct property of object.
 *
 * @param {Object} value The object to query.
 * @param {Array|String} path The path to check.
 *
 * @return {Boolean}
 *
 */
export const has = (value, path) => !!get(value, path, false);

/**
 * Find object key by its value, return the first finding.
 *
 * @param {Object} object The object to inspect.
 * @param {*} value The value to compare.
 *
 * @return {*}
 *
 */
export const findKey = (object, value) => (
  Object.keys(object).find((key) => object[key] === value)
);

/**
 * Checks if value is null or undefined.
 *
 * @param {*} value The value to check.
 *
 * @return {Boolean}
 *
 */
export const isNil = (value) => value === null || value === undefined;

/**
 * return momentjs timestamp object with default timezone
 *
 * @param {Date|Array|Object|String} timestamp timestamp
 *
 * @return {Object}
 *
 */
export const getTimestampObject = (timestamp) => {
  if (!timestamp) return null;
  return momentTz(timestamp).tz(TIMEZONE);
};

/**
 * return timestamp string in full format (date, time, timezone offset)
 *
 * @param {Date|Array|Object|String} timestamp timestamp
 *
 * @return {String}
 *
 */
export const getTimestampString = (timestamp) => {
  if (!timestamp) return '';
  return getTimestampObject(timestamp).format();
};

/**
 * return timestamp with specific format
 *
 * @param {Date|Array|Object|String} timestamp timestamp
 * @param {String} [format=''] timestamp format
 *
 * @return {String}
 *
 */
export const getTimestampFormat = (timestamp, format = '') => {
  if (!timestamp) return '';
  const timestampObj = getTimestampObject(timestamp);
  return format ? timestampObj.format(format) : timestampObj.format();
};

/**
 * Get date(s) string to be put in filename
 *
 * @param {Array} timestamps Array of given timestamp
 *
 * @return {String}
 *
 */
export const getDateFilename = (timestamps) => {
  if (!timestamps.every((v) => !!v)) return getTimestampFormat(new Date(), DATE_FORMAT);

  // check if all timestamps are same date
  const firstDate = getTimestampFormat(timestamps[0], DATE_FORMAT);
  const isSameDate = timestamps.every((v) => getTimestampFormat(v, DATE_FORMAT) === firstDate);

  // get date filename
  const dateFilename = !isSameDate
    ? timestamps.reduce((acc, val) => {
      const dateStr = getTimestampFormat(val, DATE_FORMAT);
      return acc ? `${acc} - ${dateStr}` : dateStr;
    }, '')
    : firstDate;
  return `(${dateFilename})`;
};

/**
 * Get title case from string
 *
 * @param {String} value Sentence or word which want to change
 *
 * @return {String}
 *
 */
export const titleCase = (value) => {
  const splitStr = value.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
};

/**
 * Get capitalize first letter from string
 *
 * @param {String} value Sentence or word which want to change
 *
 * @return {String}
 *
 */
export const capitalizeFirstLetter = (value) => value.charAt(0).toUpperCase() + value.slice(1);
