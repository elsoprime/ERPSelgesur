/** @elsoprimeDEV */

import React, { useEffect, useState } from 'react';
import useChileLocations from '../../../../hooks/useChileLocations';

const SelectLocations = () => {

    const {
        regiones,
        provincias,
        comunas,
        fetchProvincias,
        fetchComunas,
    } = useChileLocations();

    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedProvincia, setSelectedProvincia] = useState('');
    const [selectedComuna, setSeletedComuna] = useState('')

    const handleRegionChange = (e) => {
        const regionId = e.target.value;
        setSelectedRegion(regionId);
        setSelectedProvincia(''); // Reiniciar la selección de provincia al cambiar la región
        setSeletedComuna('')// Reiniciar la selección de las comunas al seleccionar region
        fetchProvincias(regionId);
    };

    const handleProvinciaChange = (e) => {
        const provinciaId = e.target.value;
        setSelectedProvincia(provinciaId);
        setSeletedComuna('')// Reiniciar la selección de las comunas al seleccionar region
        fetchComunas(provinciaId);
    };

     // Reiniciar la selección de comuna cuando cambia la región o provincia
  useEffect(() => {
    setSeletedComuna('');
  }, [setSelectedRegion, setSelectedProvincia]);

    return (
        <>
            <div className='mt-4 p-1'>
                <label htmlFor="">Región:</label>
                <select
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={selectedRegion}
                    onChange={handleRegionChange}
                >
                    <option value="">Seleccione una región</option>
                    {regiones.map((region) => (
                        <option key={region.codigo} value={region.codigo}>
                            {region.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className='mt-4 p-1'>
                <label htmlFor="">Provincia:</label>
                <select
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={selectedProvincia}
                    onChange={handleProvinciaChange}
                    disabled={!selectedRegion} // Deshabilitar si no hay región seleccionada
                >
                    <option value="">Seleccione una provincia</option>
                    {provincias.map((provincia) => (
                        <option key={provincia.codigo} value={provincia.codigo}>
                            {provincia.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className='mt-4 p-1'>
                <label htmlFor="">Comuna:</label>
                <select
                    className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-300 bg-white border border-gray-200 rounded-md dark:border-orange-300 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    disabled={!selectedProvincia} // Deshabilitar si no hay provincia seleccionada                    
                >
                    <option value="">Seleccione una comuna</option>
                    {comunas.map((comuna) => (
                        <option key={comuna.codigo} value={comuna.codigo}>
                            {comuna.nombre}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default SelectLocations;