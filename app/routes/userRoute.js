const express = require('express');
const router = express();
const { validator } = require('../helpers/validator');
const validate = require('../validation/userValidation.js');
const upload = require('../services/multer');
const passport = require('passport');
const userController = require("../Controller/userController");
const { generateToken } = require("../helpers/generateToken");

router.post("/registration", upload.single('Image'), validator.body(validate.registration), userController.registration);

router.post("/login", generateToken, validator.body(validate.login), userController.login);

router.get("/viewProfile", passport.authenticate('jwt', { session: false }), userController.viewProfile);

router.put("/updateProfile", upload.single('Image'), passport.authenticate('jwt', { session: false }), validator.body(validate.updateProfile), userController.updateProfile);

router.put("/resetPassword", validator.body(validate.resetPassword), passport.authenticate('jwt', { session: false }), userController.resetPassword);

module.exports = router;