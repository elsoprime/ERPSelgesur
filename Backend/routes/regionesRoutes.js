import express from 'express';
import { getRegiones, getProvincias, getComunas } from '../controllers/ubicacionesChileController.js';

const router = express.Router();

// Ruta para obtener todas las regiones
router.get('/regiones', getRegiones);

// Ruta para obtener provincias de una región específica
router.get('/regiones/:regionName/provincias', getProvincias);

// Ruta para obtener comunas de una provincia específica
router.get('/regiones/:regionName/provincias/:provinciaName/comunas', getComunas);

export default router;