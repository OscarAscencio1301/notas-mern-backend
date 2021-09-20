const {Schema, model} = require('mongoose');


const NotasSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es Obligatorio']
    },

    nota: {
        type: String,
        required: [true, 'La nota es Obligatoria']
    },

    fecha: {
        type: Date,
        required: [true, 'La fecha es Obligatoria']
    },

    nivel: {
        type: String,
        required: [true, 'El nivel es Obligatorio']
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    }

})


module.exports = model('Nota', NotasSchema);