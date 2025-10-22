const service = require('../services/libros.service');

async function listar(req, res) {
    const data = service.getAll();
    res.json(data);
}

async function obtenerPorId(req, res) {
    try{
        const libro = service.getById(req.params.id);
        if(!libro) return res.status(404).json({ error: 'Libro no encontrado' });
        res.json(libro);
    } catch(e) {
        res.status(400).json({ error: e.message });
    }
}

async function crear(req, res) {
    try{
        const nuevo = service.create(req.body);
        res.status(201).json(nuevo);
    } catch(e) {
        res.status(400).json({ error: e.message})
    }
}

async function actualizar(req, res) {
  try {
    const actualizado = service.update(req.params.id, req.body);
    if (!actualizado) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json(actualizado);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

async function eliminar(req, res) {
  try {
    const ok = service.remove(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Libro no encontrado' });
    res.status(204).send();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

module.exports = { listar, obtenerPorId, crear, actualizar, eliminar };