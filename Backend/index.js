import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import empresaRoutes from "./routes/empresaRoutes.js";
import initAdminUser from "./init.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Inicializamos el Usuario Administrador para la aplicacion
initAdminUser();

// Iniciamos las Rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/empresas", empresaRoutes);


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});