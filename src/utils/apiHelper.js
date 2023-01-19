import { required } from 'joi';
import { stringToInt } from './globalHelper';

/**
 * Get enveloped pagination response
 *
 * @param {Array} data The result data from query.
 * @param {Integer} limit limit data
 * @param {String} name name data
 * @return {Object}
 *
 */
const toPagination = (data, limit, name) => {
  const results = {
    total_page: limit ? Math.ceil(data.count / limit) : 1,
    total_data: data.count,
    [name]: data.rows,
  };
  return results;
};

/**
 * Get pagination data
 *
 * @param {Object} reqQuery The request data from query.
 * @return {Object}
 *
 */
const pagination = (reqQuery) => {
  const page = stringToInt(reqQuery.page);
  const limit = stringToInt(reqQuery.limit);
  return { limit, offset: (page - 1) * limit };
};

/**
 * [Joi] Marks a key as required if the another field is equal to any value.
 *
 * @param {Joi} joiSchema Joi schema
 * @param {String} anotherField Another field
 * @param {Boolean|Joi} value Value to be compare
 *
 * @return {Joi}
 *
 */
const requiredIf = (joiSchema, anotherField, value = true) => (
  joiSchema.when(anotherField, { is: value, then: required() })
);

export default {
  toPagination,
  pagination,
  requiredIf,
};
