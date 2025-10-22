const { Router } = require('express');
const ctrl = require('../controllers/libros.controller');

const router = Router();

router.get('/', ctrl.listar);          // GET todos
router.get('/:id', ctrl.obtenerPorId); // GET por id
router.post('/', ctrl.crear);          // POST crea
router.put('/:id', ctrl.actualizar);   // PUT actualiza por id
router.delete('/:id', ctrl.eliminar);  // DELETE por id

module.exports = router;