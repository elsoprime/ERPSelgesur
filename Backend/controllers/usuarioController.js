import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";

const registrar = async (req, res) => {
    const { email } = req.body;
    // Prevenir Usuarios Duplicados    
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario) {
        const error = new Error('El usuario ya se encuentra registrado');
        return res.status(400).json({ msg: error.message });
    }

    try {
        // Guardar un Nuevo Usuario en la base de datos
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
        res.json(usuarioGuardado);

    } catch (error) {
        console.log(error);
    }
};


const confirmar = async (req, res) => {
    const { token } = req.params;
    const usuarioConfirmar = await Usuario.findOne({ token });

    if (!usuarioConfirmar) {
        const error = new Error('Token no válido');
        console.log(usuarioConfirmar);
        return res.status(404).json({ msg: error.message });

    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save();

        res.json({ msg: "Usuario Confirmado Correctamente" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Error interno del servidor' });
    }
};

const autentificar = async (req, res) => {
    const { email, password } = req.body;

    // Comprobar si el usuario existe
    const usuarioExiste = await Usuario.findOne({ email });

    if (!usuarioExiste) {
        const error = new Error("El Usuario Ingresado No Existe");
        return res.json({ msg: error.message });
    }

    // Comprobar si el Usuario esta confirmado
    if (!usuarioExiste.confirmado) {
        const error = new Error("Tu Cuenta no ha sido confirmada");
        return res.json({ msg: error.message });
    }

    // Revisar el password del Usuario
    if (await usuarioExiste.comprobarPassword(password)) {
        // Autenticar el Usuario
        res.json({ token: generarJWT(usuarioExiste.id) });
    } else {
        const error = new Error("Tu password es incorrecto");
        return res.status(400).json({ msg: error.message });
    }
}

const olvidePassword = async (req, res) => {
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    if (!existeUsuario) {
        const error = new Error("El Usuario no existe");
        return res.status(400).json({ msg: error.message });
    }

    try {
        existeUsuario.token = generarId()
        await existeUsuario.save();
        return res.json({ msg: "Hemos enviado un correo electronico con las instrucciones" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Se ha producido un error, no se generó el Token' });
    }

};

const comprobarToken = async (req, res) => {
    const { token } = req.params;
    const tokenValido = await Usuario.findOne({ token });

    if (tokenValido) {
        // Token valido para recuperar la contraseña
        res.json({ msg: "El Token es válido para recuperar su password" });

    } else {
        // Token no valido para recuperar la contraseña
        res.json({ msg: "El Token es invalido" });
    }

};

const nuevoPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    const usuario = await Usuario.findOne({token});

    if (!usuario) {
        const error = new Error("Hubo un error");
        return res.status(400).json({ msg: error.message });
    }

    try {
        usuario.token = null;
        usuario.password = password;
        await usuario.save();
        res.json({ msg: "Password modificado correctamente" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Se ha producido un error al cambiar el Password' });
    }


};

const perfil = async (req, res) => {
    const { usuario } = req;

    res.json({ perfil: usuario });
};

export { registrar, perfil, confirmar, autentificar, olvidePassword, comprobarToken, nuevoPassword };