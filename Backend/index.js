import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import initAdminUser from "./init.js";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Permite cualquier dominio en desarrollo y los dominios de producción especificados
const whitelist = [process.env.FRONTEND_URL, process.env.REGIONES_URL];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Acceso no permitido por CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200
};

// Inicializamos el acceso al request por CORS
app.use(cors(corsOptions));



// Inicializamos el Usuario Administrador para la aplicacion
initAdminUser();


// Iniciamos las Rutas
app.use("/api/usuarios", usuarioRoutes);
//app.use("/api/regioneschile", regionesRouter);


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});