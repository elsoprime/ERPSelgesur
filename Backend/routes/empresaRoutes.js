import express from 'express';
const router = express.Router();
import {
    agregarEmpresa,
    obtenerEmpresa,
    obtenerEmpresas,    
    actualizarEmpresa,
    eliminarEmpresa
} from '../controllers/empresaController.js';
import checkAuth from '../middleware/authMiddleware.js';

// Rutas para el Area privada de la aplicación
router
    .route("/")
    .post(checkAuth, agregarEmpresa)
    .get(checkAuth, obtenerEmpresas);

router
    .route("/:id")
    .get(checkAuth, obtenerEmpresa)
    .put(checkAuth, actualizarEmpresa)
    .delete(checkAuth, eliminarEmpresa);

export default router;
