const express = require("express");
const router = express.Router();
const { getApi, getDrinkByName, getDrinkByLetter } = require("../controller/controller")

router.get("/", getApi);
router.get("/getdrinkbyname", getDrinkByName);
router.get("/getdrinkbyletter", getDrinkByLetter);


module.exports = router