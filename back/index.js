const express = require('express');
const server = express();
const dotenv = require ('dotenv')
dotenv.config()
const routerProductos = require('./src/routes/index');




// Middleware para analizar cuerpos JSON
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API TIENDA');
});

server.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    next()
})

server.use('/api', routerProductos);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
