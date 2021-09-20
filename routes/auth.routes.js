const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarUsuario } = require('../controllers/auth.controllers');
const { validarUsuario, validarLogin } = require('../helpers/validarDB');
const validarCampos = require('../middlewares/validarCampos');
const validarJWT = require('../middlewares/validarJWT');
const router = Router();

router.post('/nuevo', [
    check('correo').custom(validarUsuario).isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es Obligatoria').isLength({min: 5}),
    validarCampos
],crearUsuario);


router.post('/',[
    check('correo').custom(validarLogin).isEmail(),
    validarCampos
], loginUsuario);


router.get('/revalidar', [
    validarJWT
],revalidarUsuario);

module.exports = router;