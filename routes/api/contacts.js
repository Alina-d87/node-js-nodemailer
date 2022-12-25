const express = require("express");

const ctrlContacts = require("..//..//controllers/contacts");

const { validateBody, isValidId } = require("..//..//middlewares");

const { schemas } = require("..//..//models/contact");

const router = express.Router();

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", isValidId, ctrlContacts.getById);

router.post("/", validateBody(schemas.addSchema), ctrlContacts.addContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchemasBodyUpdate),
  ctrlContacts.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.addSchemaUpdateFavorite),
  ctrlContacts.updateFavorite
);

router.delete("/:contactId", isValidId, ctrlContacts.removeContact);

module.exports = router;
