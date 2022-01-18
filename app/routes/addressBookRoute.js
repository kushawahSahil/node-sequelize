const express = require('express');
const router = express();
const passport = require('passport');
const addressBookController = require('../Controller/addressBookController');
const Validate = require('../Validation/addressBookValidation');
const { validator } = require('../helpers/validator');


router.post("/addAddressBook", validator.body(Validate.addAddressBook), passport.authenticate('jwt', { session: false }), addressBookController.addAddressBook);

router.get("/viewAddressBook", passport.authenticate('jwt', { session: false }), addressBookController.viewAddressBook);

router.put("/updateAddressBook/:id", validator.body(Validate.updateAddressBook), passport.authenticate('jwt', { session: false }), addressBookController.updateAddressBook);

router.delete("/deleteAddressBook/:id", passport.authenticate('jwt', { session: false }), addressBookController.deleteAddressBook);

module.exports = router;