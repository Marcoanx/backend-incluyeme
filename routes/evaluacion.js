const { Router } = require('express');
const Evaluacion = require('../models/evaluacion');
const evaluacionesPredeterminadas = require('../defaultEvaluaciones');

const evaluacionRoutes = Router();

// Ruta para inyectar los exámenes predeterminados con imágenes y audios
evaluacionRoutes.post('/restaurar', async (req, res) => {
    try {
        let nuevasAgregadas = 0;
        
        // Usamos 'item' en lugar de 'eval' para evitar conflictos con palabras reservadas
        for (const item of evaluacionesPredeterminadas) {
            const existe = await Evaluacion.findOne({ titulo: item.titulo, area: item.area });
            if (!existe) {
                await Evaluacion.create(item);
                nuevasAgregadas++;
            }
        }
        
        res.json({ 
            ok: true, 
            message: `¡Éxito! Se agregaron ${nuevasAgregadas} exámenes nuevos.` 
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error });
    }
});

// Obtener todas las evaluaciones
evaluacionRoutes.get('/ver', async (req, res) => {
    try {
        const evaluaciones = await Evaluacion.find().sort({ _id: -1 });
        res.json({ ok: true, evaluacionDB: evaluaciones });
    } catch (error) {
        res.status(500).json({ ok: false, error });
    }
});

// Obtener una evaluación por ID
evaluacionRoutes.get('/ver/:id', async (req, res) => {
    try {
        const evaluacion = await Evaluacion.findById(req.params.id);
        res.json({ ok: true, evaluacionDB: [evaluacion] });
    } catch (error) {
        res.status(500).json({ ok: false, error });
    }
});

// Crear una nueva evaluación desde el panel de admin
evaluacionRoutes.post('/crear', async (req, res) => {
    try {
        const nuevaEval = await Evaluacion.create(req.body);
        res.json({ ok: true, evaluacionDB: nuevaEval });
    } catch (error) {
        res.status(500).json({ ok: false, error });
    }
});

module.exports = evaluacionRoutes;