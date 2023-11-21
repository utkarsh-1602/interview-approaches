const express = require("express");
const router = express.Router();

const Register = require("../components/register");

router.post('/register', Register.userRegistration)


module.exports = router;
