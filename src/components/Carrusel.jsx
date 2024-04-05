import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Css/Carrusel.css'

export const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    arrows: true, // Habilitar flechas de navegación
    prevArrow: <CustomPrevArrow />, // Componente personalizado para la flecha anterior
    nextArrow: <CustomNextArrow />, // Componente personalizado para la flecha siguiente
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false // Ocultar flechas en dispositivos móviles
        }
      }
    ]
  };

  return (
<div className="max-w-screen-xl mx-auto py-8">
  <Slider {...settings}>
    <div>
      <img src='src\assets\img\fast1.png' alt="Image 1" className="w-full max-h-48 md:max-h-80 object-contain" />
    </div>
    <div>
      <a href="https://www.instagram.com/reel/C2TYR1GOtGB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img src="src\assets\img\fast3.png" alt="Image 2" className="w-full max-h-48 md:max-h-80 object-contain" />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/reel/C2TYR1GOtGB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img src="src\assets\img\fast2.png" alt="Image 3" className="w-full max-h-48 md:max-h-80 object-contain" />
      </a>
    </div>
  </Slider>
</div>

  );
};

// Componentes personalizados para las flechas de navegación
const CustomPrevArrow = (props) => {
  return <div {...props} className="slick-arrow prev-arrow">Prev</div>;
};

const CustomNextArrow = (props) => {
  return <div {...props} className="slick-arrow next-arrow">Next</div>;
};
