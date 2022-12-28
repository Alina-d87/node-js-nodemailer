const express = require("express");

const { ctrlWrapper } = require("..//..//helpers");

const ctrlContacts = require("..//..//controllers/contacts");

const { validateBody, isValidId } = require("..//..//middlewares");

const { schemas } = require("..//..//models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrlContacts.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrlContacts.getById));

router.post(
  "/",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrlContacts.addContact)
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchemasBodyUpdate),
  ctrlWrapper(ctrlContacts.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.addSchemaUpdateFavorite),
  ctrlWrapper(ctrlContacts.updateFavorite)
);

router.delete(
  "/:contactId",
  isValidId,
  ctrlWrapper(ctrlContacts.removeContact)
);

module.exports = router;
