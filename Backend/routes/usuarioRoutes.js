import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autentificar, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/usuarioController.js';
import checkAuth from '../middleware/authMiddleware.js';


// Rutas para el Area pública de la aplicación
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autentificar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Rutas para el Area privada de la aplicación
router.get("/perfil", checkAuth, perfil);


export default router;