import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {    
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },

    });

    const { email, nombre, token } = datos;

    const info = await transporter.sendMail({
        from: "Plataforma de Gestión Selgesur",
        to: email,
        subject: "Recupera tu Acceso a la Plaforma - Confirma tu Cuenta",
        html:  `   
        <p> Bienvenido(a): <br><br> ${nombre}, Confirma tu cuenta en la Plataforma. <br>
        Te has registrado en nuestro Sistema de gestión y para acceder a esta aplicación debes hacer click en el siguiente enlance.<p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}"><b>Comprobar Cuenta.</b></a></p>
        <p>Si no registrarte una Cuenta, por favor ignora este mensaje.</p>`
    });    
}

export default emailRegistro;