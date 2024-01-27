import jwt from "jsonwebtoken";

const generarJWT = (id) => {
    const fechaExpira = "30d";
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: fechaExpira, });
}

export default generarJWT;