const express = require("express");

const ctrlContacts = require("..//..//controllers/contacts");

const { validateBody, validateParams } = require("..//..//middlewares");

const schemas = require("..//..//schemas/contacts");

const router = express.Router();

router.get("/", ctrlContacts.getAll);

router.get(
  "/:contactId",
  validateParams(schemas.addSchemasParams),
  ctrlContacts.getById
);

router.post("/", validateBody(schemas.addSchema), ctrlContacts.addContact);

router.delete(
  "/:contactId",
  validateParams(schemas.addSchemasParams),
  ctrlContacts.removeContact
);

router.put(
  "/:contactId",
  validateParams(schemas.addSchemasParams),
  validateBody(schemas.addSchemasBodyUpdate),
  ctrlContacts.updateContact
);

module.exports = router;
