import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
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
        subject: "Recuperación de contraseña",
        html: `   
        <p> Estimado(a) ${nombre},<br>
        Hemos recibido tu solicitud para recuperar tu contraseña y estamos aquí para ayudarte.<br>
        Para restablecer tu contraseña, sigue estos pasos sencillos:<br><br></p>

        <p>Te solicitamos que hagas clic en el siguiente enlace para cambiar tu contraseña:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}"><b>Restablecer Contraseña</b></a></p><br>

        <p>Esperamos que puedas recuperar el acceso a tu cuenta sin problemas.<br>
           Atentamente,<br>
            Equipo de Desarrollo ELSOMEDIA<p>`
       
    });
}

export default emailOlvidePassword;