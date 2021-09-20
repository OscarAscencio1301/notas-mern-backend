const { request, response } = require("express");
const Nota = require('../models/notas');
const crearNota = async (req = request, resp = response) => {
    try {
        const { titulo, nota, fecha, nivel } = req.body;
        const notaNueva = new Nota({ titulo, nota, fecha, nivel })
        notaNueva.usuario = req.uid;
        await notaNueva.save()

        resp.status(201).json({
            ok: true,
            msg: 'Crear Usuario',
            notaNueva
        })

    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',

        })
    }
}

const mostrarNotas = async (req = request, resp = response) => {
    try {
        const usuario = req.uid
        const notas = await Nota.find({ usuario }).populate('usuario')
        resp.status(200).json({
            ok: true,
            msg: 'Mostrar Usuarios',
            notas
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',

        })
    }
}

const editarNota = async (req = request, resp = response) => {
    try {
        const id = req.params.id;
        const uid = req.uid;
        const nota = await Nota.findById(id)

        if (nota.usuario.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de Editar ese evento'
            })
        }

        const notaAct = {
            ...req.body,
            usuario: uid
        }
        const notaN = await Nota.findByIdAndUpdate(id, notaAct, {
            new: true
        })

        resp.status(200).json({
            ok: true,
            msg: 'Editar Usuario',
            notaN
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',

        })
    }
}

const borrarNota = async(req = request, resp = response) => {
    try {
        const id = req.params.id;
        const uid = req.uid;
        const nota = await Nota.findById(id)

        if (nota.usuario.toString() !== uid) {
            return resp.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de Borrar ese evento'
            })
        }

        const notaBorrada = await Nota.findOneAndDelete(id);

        resp.status(200).json({
            ok: true,
            msg: 'Borrar Evento',
            notaBorrada
        })
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador'
        })
    }
}
module.exports = {
    crearNota,
    mostrarNotas,
    editarNota,
    borrarNota
}