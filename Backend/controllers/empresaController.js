import { json } from "express";
import empresa from "../models/Empresa.js";

const agregarEmpresa = async (req, res) => {
    const { rut, nombre, direccion, telefono, rubro } = req.body;
    const empresa = new Empresa(req.body);

    empresa.usuarioAsociado = req.usuarioAsociado._id;

    try {
        const empresaAlmacenada = await empresa.save();
        json(empresaAlmacenada);
    } catch (error) {
        console.log(error);
    }

};

const obtenerEmpresas = async (req, res) => {
    const empresa = await Empresa.find()
        .where("Usuario")
        .equals(req.usuarioAsociado);
    json(empresa);
};

const obtenerEmpresa = async (req, res) => {
    const { id } = req.params;
    const empresa = await Empresa.findById(id);

    if (!empresa) {
        return res.status(404).json({ msg: "No Encontrado " });
    }

    if (empresa.usuarioAsociado._id.toString() != empresa.usuarioAsociado._id.toString()) {
        return res.json({ msg: "Acción no válida" });
    }

    res.json({ empresa });
};

const actualizarEmpresa = async (req, res) => {
    const { id } = req.params;
    const empresa = await Empresa.findById(id);

    if (!empresa) {
        return res.status(404).json({ msg: "No Encontrado " });
    }

    if (empresa.usuarioAsociado._id.toString() != empresa.usuarioAsociado._id.toString()) {
        return res.json({ msg: "Acción no válida" });
    }
    // Actualizamos la Empresa utilizando los campos del modelo
    empresa.rut = req.body.rut || empresa.rut;
    empresa.nombre = req.body.nombre || empresa.nombre;
    empresa.direccion = req.body.direccion || empresa.direccion;
    empresa.telefono = req.body.telefono || empresa.telefono;
    empresa.email = req.body.email || empresa.email;
    empresa.rubro = req.body.rubro || empresa.rubro;

    try {
        const empresaActualizada = await empresa.save();
        res.json(empresaActualizada);
    } catch (error) {
        console.log(error);
    }
};

const eliminarEmpresa = async (req, res) => { 
    const { id } = req.params;
    const empresa = await Empresa.findById(id);

    if (!empresa) {
        return res.status(404).json({ msg: "No Encontrado " });
    }

    if (empresa.usuarioAsociado._id.toString() != empresa.usuarioAsociado._id.toString()) {
        return res.json({ msg: "Acción no válida" });
    } 

    try {
        await empresa.deleteOne();
        res.json({ msg: "Se ha eliminado la empresa "});
    } catch (error) {
        console.log(error);
    }
};

export {
    agregarEmpresa,
    obtenerEmpresa,
    obtenerEmpresas,
    actualizarEmpresa,
    eliminarEmpresa
};