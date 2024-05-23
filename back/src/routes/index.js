const express = require('express');
const router = express.Router();
const Productos = require ('../controller/index')

router.get('/productos', Productos.getAll );

// Puedes agregar rutas POST o cualquier otra ruta aquí

module.exports = router;
