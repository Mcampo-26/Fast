import React from 'react';
import imagen0 from '../assets/0.jpg';
import imagen1 from '../assets/1.jpg';
import './Css/MenuPlato.css'; // Importa el archivo CSS

export const MenuPlato = () => {
    return (
        <div className='bg image-container'>
            <div className="background-container">
                <div>
                    <div className="mb-6 md:flex md:justify-center ">
                        <div >
                            <img 
                                src={imagen0} 
                                alt="Imagen 0" 
                                className="border  custom-img-size"
                            />
                        </div>            
                        <div>
                            <img 
                                src={imagen1} 
                                alt="Imagen 1" 
                                className="border  custom-img-size mt-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
