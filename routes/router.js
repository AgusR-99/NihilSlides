const express = require("express");
const router = express.Router();
const { getMotd } = require("../controllers/controller");

router.route("/").get(getMotd);

module.exports = router;
