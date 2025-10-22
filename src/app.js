const express = require('express');
const path = require('path');

const librosRouter = require('./routes/libros.routes');

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
app.use('/libros', librosRouter);

//Manejo basico de errores 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;