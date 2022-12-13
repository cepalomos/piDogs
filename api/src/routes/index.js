const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const temper = require('./Temper');
const dog = require('./Dog');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/temperaments",temper);
router.use("/dogs",dog);


module.exports = router;
