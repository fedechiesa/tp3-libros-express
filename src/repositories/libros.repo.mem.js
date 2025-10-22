//Repo en memoria
const Libro = require("../models/libro.model");

let _autoId = 3;
const _libros = [
  new Libro({ id: 1, titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', anio: 1937 }),
  new Libro({ id: 2, titulo: 'Fundación', autor: 'Isaac Asimov', anio: 1951 }),
  new Libro({ id: 3, titulo: 'Clean Code', autor: 'Robert C. Martin', anio: 2008 }),
];

function listar() {
    return [..._libros];
}

function obtenerPorId(id){
    return _libros.find(l => l.id === id) || null;
}

function crear({ titulo, autor, anio }){
    const libro = new Libro({ id: ++_autoId, titulo, autor, anio});
    _libros.push(libro);
    return libro;
}

function actualizar(id, { titulo, autor, anio }) {
  const libro = obtenerPorId(id);
  if (!libro) return null;

  if (titulo !== undefined) libro.titulo = titulo;
  if (autor !== undefined) libro.autor = autor;
  if (anio !== undefined) libro.anio = anio;

  return libro;
}

function eliminar(id) {
  const libro = obtenerPorId(id);
  if (!libro) return false;

  const idx = _libros.indexOf(libro);
  if (idx === -1) return false;

  _libros.splice(idx, 1);
  return true;
}

module.exports = { listar, obtenerPorId, crear, actualizar, eliminar };