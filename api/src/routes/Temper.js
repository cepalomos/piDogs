const {Router} = require('express');
const router = Router();
const Temper = require('../controller/Temper');
const temper = new Temper();

router.get("/",temper.getTemper);

module.exports = router;