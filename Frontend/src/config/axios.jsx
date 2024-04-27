import axios from "axios";

// Obtén las variables de entorno del backend
const apiUrl = `${import.meta.env.VITE_API_URL}/api`
const regionesUrl = `${import.meta.env.VITE_URL_REGIONES}/dpa` //Varibale de Entorno con la URL externa

// Configuración de clienteAxios para las solicitudes a la API principal
const clienteAxios = axios.create({
  baseURL: apiUrl, // URL base de tu API principal
});

const apiRegiones = axios.create({
  baseURL: regionesUrl, // Esto asume que VITE_URL_REGIONES está configurado en tus variables de entorno
});

export { clienteAxios, apiRegiones};
