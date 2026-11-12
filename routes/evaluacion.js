const { Router } = require('express');
const Evaluacion = require('../models/evaluacion');

const evaluacionRoutes = Router();

evaluacionRoutes.get('/ver', async (req, res) => {
    try {
        const evaluaciones = await Evaluacion.find().sort({ _id: -1 });
        res.json({ ok: true, evaluacionDB: evaluaciones });
    } catch (error) {
        res.status(500).json({ ok: false, error });
    }
});

evaluacionRoutes.get('/ver/:id', async (req, res) => {
    try {
        const evaluacion = await Evaluacion.findById(req.params.id);
        res.json({ ok: true, evaluacionDB: [evaluacion] });
    } catch (error) {
        res.status(500).json({ ok: false, error });
    }
});

evaluacionRoutes.post('/crear', async (req, res) => {
    try {
        const evaluacion = await Evaluacion.create(req.body);
        res.json({ ok: true, evaluacionDB: evaluacion });
    } catch (error) {
        res.status(500).json({ ok: false, error });
    }
});

module.exports = evaluacionRoutes;