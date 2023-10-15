import React from 'react';
import Slider from 'react-slick';
import './Carrousel.css'; // Estilo personalizado si lo deseas
import imagen1 from  "../assets/Carrousel-1.jpg"
import imagen2 from  "../assets/Carrousel-2.jpg"

export const Carrousel = () => {
  const settings = {
    dots: true, // Muestra los puntos indicadores de navegación
    infinite: true, // Permite la reproducción infinita del carrusel
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 1, // Número de imágenes que se mostrarán a la vez
    slidesToScroll: 1, // Número de imágenes que se desplazarán al hacer clic en los botones de navegación
  };

  const images = [imagen1, imagen2];

  return (
    <div className="carrousel-container">
      <h2>Poner subtitulo aca</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};



  