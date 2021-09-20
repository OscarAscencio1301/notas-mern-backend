const { request, response } = require("express");
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const generarJWT = require("../helpers/generarJWT");
const validarJWT = require("../middlewares/validarJWT");

const crearUsuario = async(req = request, resp = response) => {
    const {nombre, correo, password} = req.body;
    const usuario = new Usuario({nombre, correo, password})
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    await usuario.save();
    
    const token = await generarJWT(usuario._id, usuario.nombre)

    resp.status(201).json({
        ok: true,
        msg: 'Crear Usuario',
        usuario,
        token
    })
}

const loginUsuario = async(req = request, resp = response) => {
    const {correo, password} = req.body;
    const usuario = await Usuario.findOne({correo});
    const passwordIguales = bcryptjs.compareSync(password, usuario.password)
    if(!passwordIguales){
        return resp.status(400).json({
            ok: false,
            msg: 'Error en el usuario/password',
        })
    }
    const token = await generarJWT(usuario._id, usuario.nombre)

    resp.status(200).json({
        ok: true,
        msg: 'Login Usuario',
        usuario,
        token
    })
}


const revalidarUsuario = async(req = request, resp = response) => {
    const {uid, nombre} = req;
    const token = await generarJWT(uid, nombre)

    resp.status(200).json({
        ok: true,
        msg: 'Renovar Usuario',
        uid,
        nombre,
        token
       
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarUsuario
}