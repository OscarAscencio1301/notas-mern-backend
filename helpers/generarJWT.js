const jwt = require('jsonwebtoken');
const generarJWT = (uid, nombre) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, nombre }
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '4h'
        }, (error, token) => {

            if (error) {
                reject('No se pudo generar el token')
            } else {
                resolve(token)
            }

        })
    })

}


module.exports = generarJWT;