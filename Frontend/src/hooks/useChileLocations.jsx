import { useState, useEffect } from 'react';
import { getRegiones, getProvincias, getComunas } from '../api/Api';

const useChileLocations = () => {
  const [regiones, setRegiones] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [comunas, setComunas] = useState([]);

  useEffect(() => {
    const fetchRegiones = async () => {
      try {
        const data = await getRegiones();
        setRegiones(data);
      } catch (error) {
        console.error('Error al obtener las regiones:', error);
      }
    };

    fetchRegiones(); // Llama a la función para obtener regiones al montar el componente
  }, []); // Se ejecuta solo una vez al montar el componente

  const fetchProvincias = async (regionId) => {
    try {
      const data = await getProvincias(regionId);
      setProvincias(data);
    } catch (error) {
      console.error('Error al obtener las provincias:', error);
    }
  };

  const fetchComunas = async (provinciaId) => {
    try {
      const data = await getComunas(provinciaId);
      setComunas(data);
    } catch (error) {
      console.error('Error al obtener las comunas:', error);
    }
  };

  return {
    regiones,
    provincias,
    comunas,
    fetchProvincias,
    fetchComunas,
  };
};

export default useChileLocations;