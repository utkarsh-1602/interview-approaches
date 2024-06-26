const express = require("express");
const router = express.Router();

const UserRoles = require("../controllers/userRoles");

router.post('/register', UserRoles.userRegistration)
router.post('/login', UserRoles.userLogin)
router.get('/getUsers', UserRoles.getUsers)

module.exports = router;
