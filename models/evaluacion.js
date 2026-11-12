const { Schema, model } = require('mongoose');

const evaluacionSchema = new Schema({
    titulo: { type: String, required: [true, 'El título es necesario'] },
    area: { type: String },
    tipo: { type: String, default: 'cerrada' },
    preguntas: [{
        indicacion: { type: String },
        sound: { type: String }, 
        correct: { type: String },
        img: [{ type: String }] 
    }],
    created: { type: Date, default: Date.now }
});

module.exports = model('Evaluacion', evaluacionSchema);