import { useState, useEffect } from 'react';
import BG001 from "../assets/BG001.png";
import BG002 from "../assets/BG002.png";
import BG003 from "../assets/BG003.png";
import BG004 from "../assets/BG004.png";
import BG005 from "../assets/BG005.png";
import BG006 from "../assets/BG006.png";

const BGAnimatedLogin = () => {
    const [backgroundImage, setBackgroundImage] = useState(BG001);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage(prevBackgroundImage =>
                prevBackgroundImage === BG001 ? BG002 : BG001
            );
        }, 9000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []); // Ejecuta este efecto solo una vez al montar el componente

    return (
        <div
            className="bg-cover bg-center transition-opacity duration-500 h-full"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                opacity: 1,
                filter: 'blur(2px)', // Aplica un desenfoque al fondo
                transition: 'background-image 0.5s ease-in-out', // Transición de opacidad suave
                maxHeight: '100%', // Limita la altura al 100% del contenedor
                zIndex: -1, // Cambiado a un valor negativo
            }}
        />
    );
};

const BGAnimatedRecovery = () => {
    const [backgroundImage, setBackgroundImage] = useState(BG005);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage(prevBackgroundImage =>
                prevBackgroundImage === BG005 ? BG006 : BG005
            );
        }, 9000); // Cambia la imagen cada 9 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []); // Ejecuta este efecto solo una vez al montar el componente

    return (
        <div
            className="bg-cover bg-center transition-opacity duration-500 h-full"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                opacity: 1,
                filter: 'blur(2px)', // Aplica un desenfoque al fondo
                transition: 'background-image 0.5s ease-in-out', // Transición de opacidad suave
                maxHeight: '100%', // Limita la altura al 100% del contenedor
                zIndex: -1, // Cambiado a un valor negativo
            }}
        />
    );
};

const BGAnimatedRegister = () => {
    const [backgroundImage, setBackgroundImage] = useState(BG003);

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImage(prevBackgroundImage =>
                prevBackgroundImage === BG003 ? BG004 : BG003
            );
        }, 9000); // Cambia la imagen cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []); // Ejecuta este efecto solo una vez al montar el componente

    return (
        <div
            className="bg-cover bg-center transition-opacity duration-500 h-full"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                opacity: 1,
                filter: 'blur(2px)', // Aplica un desenfoque al fondo
                transition: 'background-image 0.5s ease-in-out', // Transición de opacidad suave
                maxHeight: '100%', // Limita la altura al 100% del contenedor
                zIndex: -1, // Cambiado a un valor negativo
            }}
        />
    );
};

export { BGAnimatedLogin, BGAnimatedRegister, BGAnimatedRecovery };
