const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const funct = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return funct;
};

module.exports = validateBody;
