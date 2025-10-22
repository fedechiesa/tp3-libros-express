const repo = require("../repositories/libros.repo.mem");

function validarPayLoad({ titulo, autor, anio }, { parcial = false } = {}) {
  if (!parcial) {
    if (!titulo || !autor || anio === undefined) {
      return "Faltan campos";
    }
  }
  if (titulo !== undefined && typeof titulo !== "string")
    return "titulo debe ser string";
  if (autor !== undefined && typeof autor !== "string")
    return "autor debe ser string";
  if (anio !== undefined && isNaN(Number(anio)))
    return "anio debe ser numérico";
  return null;
}

function getAll(){
    return repo.listar();
}

function getById(id){
    const num = Number(id)
    if(isNaN(num)) throw new Error('ID invalido');
    const libro = repo.obtenerPorId(num);
    return libro;
}

function create(data){
    const err = validarPayLoad(data);
    if(err) throw new Error(err);
    const payload = { ...data, anio: Number(data.anio) };
    return repo.crear(payload);
}

function update(id, data){
    const num = Number(id);
    if(isNaN(num)) throw new Error('ID invalido');
    const err = validarPayLoad(data, { parcial: true });
    if(err) throw new Error(err);
    const payload = {...data};
    if(payload.anio !== undefined) payload.anio = Number(payload.anio);
    const actualizado = repo.actualizar(num, payload)
    return actualizado;
}

function remove(id){
    const num = Number(id);
    if(isNaN(num)) throw new Error('ID invalido');
    return repo.eliminar(id);
}

module.exports = { getAll, getById, create, update, remove };