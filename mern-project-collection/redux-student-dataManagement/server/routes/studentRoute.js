const express = require("express");
const router = express.Router();

const studentInfo = require("../controllers/studentInfo");

router.post('/studentInfo', studentInfo.studentInfo)

module.exports = router;