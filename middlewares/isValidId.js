const { isValidObjectId } = require("mongoose");

const { HttpError } = require("..//helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  const result = isValidObjectId(contactId);

  if (!result) {
    next(HttpError(404, "Invalid id"));
  }
  next();
};
module.exports = isValidId;
