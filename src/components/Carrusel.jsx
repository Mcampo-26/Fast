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
    autoplay: true, // Activar reproducción automática del carrusel
    autoplaySpeed: 3000,
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
      <img src='https://gtsinformatica.com/wp-content/uploads/2020/10/reparacion-de-notebook-1.jpg' alt="Image 1" className="w-full max-h-48 md:max-h-80 object-contain" />
    </div>
    <div>
      <a href="https://www.instagram.com/reel/C2TYR1GOtGB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img src="https://img.freepik.com/fotos-premium/reparador-computadoras-arreglando-nuevo-componente-laptop-computadora-reparacion-concepto_106035-1489.jpg" alt="Image 2" className="w-full max-h-48 md:max-h-80 object-contain" />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/reel/C2TYR1GOtGB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
        <img src="https://i0.wp.com/ensedeciencia.com/wp-content/uploads/2023/04/Copia-de-C-EdCiencia-P-2023-04-23T184139.080.jpg?resize=800%2C451&ssl=1" alt="Image 3" className="w-full max-h-48 md:max-h-80 object-contain" />
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
