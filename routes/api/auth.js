const express = require("express");

const ctrlUser = require("..//..//controllers/auth");

const { ctrlWrapper } = require("..//..//helpers");

const { validateBody, authenticate } = require("..//..//middlewares");

const { schemas } = require("..//..//models/user");

const router = express.Router();

//// signup
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrlUser.register)
);

//// signin
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrlUser.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrlUser.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrlUser.logout));

module.exports = router;
