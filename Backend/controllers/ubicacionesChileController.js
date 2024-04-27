import regionesChile from "../models/regiones.js";

const API_BASE_URL = process.env.REGIONES_URL;

// Controlador para obtener todas las regiones
export const getRegiones = async () => {
    const response = await fetch(`${API_BASE_URL}/api/regiones`);
    return response.json();
  };
  

// Controlador para obtener provincias de una región específica
const getProvincias = async (req, res) => {
    const { regionName } = req.params;
    try {
        const region = regionesChile.find((region) => region.region === regionName);
        if (!region) {
            return res.status(404).json({ message: "Región no encontrada" });
        }
        res.json(region.provincias); // Devuelve las provincias de la región encontrada
    } catch (error) {
        console.error("Error al obtener provincias:", error);
        res.status(500).json({ message: "Error al obtener provincias" });
    }
};

// Controlador para obtener comunas de una provincia específica
const getComunas = async (req, res) => {
    const { regionName, provinciaName } = req.params;
    try {
        const region = regionesChile.find((region) => region.region === regionName);
        if (!region) {
            return res.status(404).json({ message: "Región no encontrada" });
        }

        const provincia = region.provincias.find((provincia) => provincia.name === provinciaName);
        if (!provincia) {
            return res.status(404).json({ message: "Provincia no encontrada" });
        }

        res.json(provincia.comunas); // Devuelve las comunas de la provincia encontrada
    } catch (error) {
        console.error("Error al obtener comunas:", error);
        res.status(500).json({ message: "Error al obtener comunas" });
    }
};

export { getRegiones, getProvincias, getComunas };
