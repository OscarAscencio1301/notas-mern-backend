const mongoose = require('mongoose');

const configDB = () => {
    try {
       mongoose.connect(process.env.URLDB);
       console.log('Base de Datos Conectada')
    } catch (error) {
        console.log('No Conexion')
    }
}

module.exports = {configDB}