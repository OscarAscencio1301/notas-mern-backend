const { Schema, model } = require('mongoose')


const NivelSchema = Schema({
    nivel: {
        type: String,
        required: true
    }

})

module.exports = model('Nivele', NivelSchema)