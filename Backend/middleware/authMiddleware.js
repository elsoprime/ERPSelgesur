import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const checkAuth = async (req, res, next) => {
    try {
        // Validamos el acceso a las rutas de la aplicación mediante un JSON Web Token
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
            return res.status(401).json({ msg: 'Token no válido o inexistente' });
        }

        const token = authorizationHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);            
        req.usuario = await Usuario.findById(decoded.id).select("-email -password -token -confirmado");

        if (!req.usuario) {
            return res.status(401).json({ msg: 'Usuario no encontrado' });
        }

        next();
        
    } catch (error) {
        console.error(error);
        const errorMessage = error.name === 'JsonWebTokenError' ? 'Token no válido' : 'Error de autenticación';
        return res.status(401).json({ msg: errorMessage });
    }
};

export default checkAuth;

