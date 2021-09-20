const Usuario = require('../models/usuario');
const Nivel = require('../models/nivel');
const moment = require('moment');

const validarUsuario = async (correo = '') => {
    const usuarioExiste = await Usuario.findOne({ correo });
    if (usuarioExiste) {
        throw new Error(`El correo ${correo}, ya está registrado`);
    }
}

const validarLogin = async (correo = '') => {
    const usuarioNoExiste = await Usuario.findOne({ correo });
    if (!usuarioNoExiste) {
        throw new Error(`El correo ${correo}, no está registrado`);
    }
}

const validarFecha = (fecha) => {
    if (!fecha) {
        return false;
    }
    const fechaValidada = moment(fecha)
    if (fechaValidada.isValid()) {
        return true;
    } else {
        return false;
    }
}
const validarId = async(id) => {
    const idExiste = await Evento.findById(id)
    if(!idExiste){
        throw new Error(`El id ${id} no existe en la BD`)
    }
}

const validarNivel= async (nivel = '') => {
    const nivelExiste = await Nivel.findOne({ nivel })
    if (!nivelExiste) {
        throw new Error(`El nivel ${nivel} no existe`)
    }
}


module.exports = {
    validarUsuario,
    validarLogin,
    validarFecha,
    validarNivel,
    validarId
}