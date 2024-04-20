import React from 'react';
import imagen0 from '../assets/0.jpg';
import imagen1 from '../assets/1.jpg';
import './Css/MenuPlato.css'; // Importa el archivo CSS

export const MenuPlato = () => {
    return (
        <div className="bg">
            <div className="background-container">
                <div className="md:mx-auto md:max-w-3xl h-screen flex flex-col justify-center items-center">
                    <div className="mb-6 image-container">
                        <img 
                            src={imagen0} 
                            alt="Imagen 0" 
                            className="border"
                        />
                    </div>            
                    <div className="image-container">
                        <img 
                            src={imagen1} 
                            alt="Imagen 1" 
                            className="border"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
