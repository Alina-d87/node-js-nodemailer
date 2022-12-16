const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().integer().required(),
});

const addSchemasParams = Joi.object({
  contactId: Joi.string().empty(),
});

const addSchemasBodyUpdate = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.number().integer(),
});

module.exports = {
  addSchema,
  addSchemasParams,
  addSchemasBodyUpdate,
};
