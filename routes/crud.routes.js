const { Router } = require('express');
const { check } = require('express-validator');
const { mostrarNotas, crearNota, borrarNota, editarNota } = require('../controllers/crud.controllers');
const { validarFecha, validarNivel, validarId } = require('../helpers/validarDB');
const validarCampos = require('../middlewares/validarCampos');
const validarJWT = require('../middlewares/validarJWT');
const router = Router();

router.post('/',[
    validarJWT,
    check('titulo', 'El titulo es requerido').not().isEmpty(),
    check('nota', 'La nota es requerida').not().isEmpty(),
    check('fecha').custom(validarFecha),
    check('nivel').custom(validarNivel),
    validarCampos
], crearNota);
router.get('/', [
    validarJWT
], mostrarNotas);


router.put('/:id', [
    validarJWT,
    check('id').custom(validarId).isMongoId(),
    check('titulo', 'El titulo es requerido').not().isEmpty(),
    check('nota', 'La nota es requerida').not().isEmpty(),
    check('fecha').custom(validarFecha),
    check('nivel').custom(validarNivel),
    validarCampos
], editarNota);
router.delete('/:id', [
    validarJWT,
    check('id').custom(validarId).isMongoId(),
    validarCampos
],borrarNota);


module.exports = router;