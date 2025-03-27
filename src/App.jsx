import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Carousel } from "react-bootstrap";

const images = [
  { src: "/img/cascadas.jpg", title: "CASCADAS DE AGUA AZUL", rating: 4.7 },
  { src: "/img/cañon.jpg", title: "CAÑÓN DEL SUMIDERO", rating: 4.7 },
  { src: "/img/arco.jpg", title: "EL ARCOTETE", rating: 4.7 },
  { src: "/img/sima.jpg", title: "SIMA DE LAS COTORRAS", rating: 4.7 },
];


const paquetes = [
  { src: "/img/CCPAQUETE.jpg", title: "CHIAPA DE CORZO", rating: 4.7 },
  { src: "/img/SPAQUETES.jpg", title: "SAN CRISTOBAL DE LAS CASAS", rating: 4.7 },
  { src: "/img/LP.jpg", title: "LAGOS DEL COLON", rating: 4.7 },
  { src: "/img/sima.jpg", title: "SIMA DE LAS COTORRAS", rating: 4.7 },
  { src: "/img/YP.jpg", title: "YAXCHILAN", rating: 4.7 },

];



const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activePaqueteIndex, setActivePaqueteIndex] = useState(null);

  return (
    <>
      {/* Contenedor del logo y la navbar */}
      <div className="nav-container">
        <img src="/img/logoc.png" alt="logo" className="logo" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item"><a className="nav-link" href="#">INICIO</a></li>
                <li className="nav-item"><a className="nav-link" href="#">TOURS</a></li>
                <li className="nav-item"><a className="nav-link" href="#">PAQUETES</a></li>
                <li className="nav-item"><a className="nav-link" href="#">CONTACTO</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Carrusel */}
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img className="d-block w-100" src="/img/cascadas.jpg" alt="Cascada Chiapas" />
          <Carousel.Caption>
            <h1 className="banner-title">Chiapas Oculto</h1>
            <p className="banner-subtitle">Explora, vive y sorpréndete</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="/img/C2.jpg" alt="Palenque" />
          <Carousel.Caption>
            <h1 className="banner-title">Chiapas Oculto</h1>
            <p className="banner-subtitle">Explora, vive y sorpréndete</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="/img/c7.jpg" alt="Cañón del Sumidero" />
          <Carousel.Caption>
            <h1 className="banner-title">Chiapas Oculto</h1>
            <p className="banner-subtitle">Aventura en cada rincón</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="/img/c8.jpg" alt="Cañón del Sumidero" />
          <Carousel.Caption>
            <h1 className="banner-title">Chiapas Oculto</h1>
            <p className="banner-subtitle">Aventura en cada rincón</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Botón Nosotros */}
      <div className="text-center mt-4">
        <button className="btn btn-success big-button">Nosotros</button>
      </div>

      {/* Tours */}
      <section className="tours-section" id="Tours">
        <div className="tour-card container">
          <h2 className="tours-title">Tours</h2>
          <div className="tour-content">
            <div className="tour-text">
              <h3>Zona Arqueológica Palenque</h3>
              <p>
                Un viaje a Palenque, Chiapas, es una experiencia inolvidable que combina historia,
                naturaleza y cultura en un solo destino.
              </p>

              <div className="line-separator"></div>

              <ul className="tour-details">
                <li>$980.00</li>
                <li>Por persona</li>
                <li>Minimo 2 personas</li>
                <li>Maximo 10 personas</li>
              </ul>
              <ul className="tour-details">
                <li>Duración del recorrido: 1 Día</li>
              </ul>
            </div>

            {/* Contenedor de imagen + calificación */}
            <div className="tour-image-container">
              <img src="/img/Tpalenque.jpg" alt="Zona Arqueológica Palenque" className="tour-image" />
              {/* Calificación */}
              <div className="tour-rating">
                <span className="rating-score">4.7</span>
                <span className="stars">★★★★☆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {/* Imagen */}
            <img src={image.src} alt={image.title} />

            {/* Overlay con título */}
            <div className="overlay">
              <h5>{image.title}</h5>
            </div>

            {/* Rating en la esquina inferior derecha */}
            <div className="rating">
              <span>{image.rating}</span> ★★★★☆
            </div>
          </div>
        ))}
      </div>


      {/* Botón "Ver Más" */}
      <div className="text-center mt-4">
        <button className="vermas-button">Ver Más</button>
      </div>




      {/* Paquetes */}
      <div className="App">
        {/* Sección de Paquetes */}
        <section className="tours-section">
          <div className="tour-card container">
            <h2 className="tours-title">Paquetes</h2>
            <div className="tour-content">
              <div className="tour-text">
                <h3>Chiapas: Selva, Cultura y Aventura</h3>
                <p>
                  Descubre la esencia de Chiapas en un viaje lleno de naturaleza, historia y tradición. Recorre cañones imponentes,
                  cascadas cristalinas y antiguas ciudades mayas ocultas en la selva. Sumérgete en la cultura de los pueblos indígenas
                  y maravíllate con los paisajes más espectaculares del sureste mexicano.
                </p>

                <div className="line-separator"></div>

                <ul className="tour-details">
                  <li>$980.00</li>
                  <li>Por persona</li>
                  <li>Minimo 2 personas</li>
                  <li>Maximo 10 personas</li>
                </ul>
                <ul className="tour-details">
                  <li>Duración del recorrido: 1 Día</li>
                </ul>
              </div>

              {/* Contenedor de imagen principal Paquete */}
              <div className="tour-image-container">
                <img src="/img/Paquete.png" alt="Zona Arqueológica Palenque" className="tour-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Galería de Paquetes */}
        <div className="paquete-gallery">
          {paquetes.map((paquete, index) => (
            <div
              key={index}
              className={`paquete-item ${activePaqueteIndex === index ? "active" : ""}`}
              onClick={() => setActivePaqueteIndex(index === activePaqueteIndex ? null : index)}
            >
              {/* Imagen */}
              <img src={paquete.src} alt={paquete.title} />

              {/* Overlay con título */}
              <div className="paquete-overlay">
                <h5>{paquete.title}</h5>
              </div>

             
            </div>
          ))}
        </div>





      </div>




    </>





  );
};

export default App;

