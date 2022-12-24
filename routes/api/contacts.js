const express = require("express");

const ctrlContacts = require("..//..//controllers/contacts");

const {
  validateBody,
  validateParams,
  isValidId,
} = require("..//..//middlewares");

const schemas = require("..//..//models/contact");

const router = express.Router();

router.get("/", ctrlContacts.getAll);

router.get(
  "/:contactId",
  isValidId,
  validateParams(schemas.addSchemasParams),
  ctrlContacts.getById
);

router.post("/", validateBody(schemas.addSchema), ctrlContacts.addContact);

router.delete(
  "/:contactId",
  isValidId,
  validateParams(schemas.addSchemasParams),
  ctrlContacts.removeContact
);

router.put(
  "/:contactId",
  isValidId,
  validateParams(schemas.addSchemasParams),
  validateBody(schemas.addSchemasBodyUpdate),
  ctrlContacts.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateParams(schemas.addSchemasParams),
  validateBody(schemas.addSchemasBodyUpdate),
  ctrlContacts.updateFavourite
);

module.exports = router;
