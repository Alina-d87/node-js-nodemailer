const { Schema, model } = require("mongoose");
const Joi = require("joi");

const handleMongooseError = require("..//helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().integer().required(),
  favorite: Joi.boolean(),
});

const addSchemasParams = Joi.object({
  contactId: Joi.string().empty(),
});

const addSchemasBodyUpdate = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.number().integer(),
});

const schemas = {
  addSchema,
  addSchemasParams,
  addSchemasBodyUpdate,
};

//const updateFavoriteScheme = Joi.object({
//  favorite: Joi.boolean().required(),
//});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas,
};
