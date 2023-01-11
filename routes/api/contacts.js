const express = require("express");

const { ctrlWrapper } = require("..//..//helpers");

const ctrlContacts = require("..//..//controllers/contacts");

const {
  validateBody,
  isValidId,
  authenticate,
} = require("..//..//middlewares");

const { schemas } = require("..//..//models/contact");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrlContacts.getAll));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrlContacts.getById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrlContacts.addContact)
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchemasBodyUpdate),
  ctrlWrapper(ctrlContacts.updateContact)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.addSchemaUpdateFavorite),
  ctrlWrapper(ctrlContacts.updateFavorite)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(ctrlContacts.removeContact)
);

module.exports = router;
