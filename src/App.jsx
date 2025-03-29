import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Carousel } from "react-bootstrap";

const images = [
  { src: "/img/cascadas.jpg", title: "CASCADAS DE AGUA AZUL" },
  { src: "/img/cañon.jpg", title: "CAÑÓN DEL SUMIDERO" },
  { src: "/img/arco.jpg", title: "EL ARCOTETE" },
  { src: "/img/sima.jpg", title: "SIMA DE LAS COTORRAS" },
  { src: "/img/cañon.jpg", title: "CAÑON DEL SUMIDERO" },
];

const imgtours = [
  {
    src: "/img/cascadas.jpg",
    title: "Cascadas De Agua Azul",
    shortDescription: "Cascadas turquesa en Chiapas.",
    description: "El tour a Agua Azul te lleva a cascadas turquesa rodeadas de selva, con pozas naturales para disfrutar.",
    price: "$980.00",
    duration: "1 Día"


  },
  {
    src: "/img/cañon.jpg",
    title: "Cañon Del Sumidero",
    shortDescription: "Espectacular cañón con ríos y fauna.",
    description: "Navega por este impresionante cañón con paredes de más de 1,000 metros de altura, hogar de cocodrilos, monos y aves exóticas.",
    price: "$850.00",
    duration: "1 Día",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
  },
  {
    src: "/img/arco.jpg",
    title: "El Arcote",
    shortDescription: "Arco de roca en medio de la selva.",
    description: "Un espectacular parque ecológico cerca de San Cristóbal de las Casas, con un imponente arco de piedra caliza, cuevas y actividades como senderismo y tirolesa.",
    price: "$700.00",
    duration: "1 Día"
  },
  {
    src: "/img/sima.jpg",
    title: "Sima De Las Cotorras",
    shortDescription: "Un abismo lleno de cotorras.",
    description: "Un abismo natural con cientos de cotorras volando al amanecer.",
    price: "$600.00",
    duration: "1 Día"
  },


];

const imgpaquetes = [
  {
    src: "/img/cascadas.jpg",
    title: "Cascadas De Agua Azul",
    shortDescription: "Cascadas turquesa en Chiapas.",
    description: "El tour a Agua Azul te lleva a cascadas turquesa rodeadas de selva, con pozas naturales para disfrutar.",
    price: "$980.00",
    duration: "1 Día"


  },
  {
    src: "/img/cañon.jpg",
    title: "Cañon Del Sumidero",
    shortDescription: "Espectacular cañón con ríos y fauna.",
    description: "Navega por este impresionante cañón con paredes de más de 1,000 metros de altura, hogar de cocodrilos, monos y aves exóticas.",
    price: "$850.00",
    duration: "1 Día",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
  },
  {
    src: "/img/arco.jpg",
    title: "El Arcote",
    shortDescription: "Arco de roca en medio de la selva.",
    description: "Un espectacular parque ecológico cerca de San Cristóbal de las Casas, con un imponente arco de piedra caliza, cuevas y actividades como senderismo y tirolesa.",
    price: "$700.00",
    duration: "1 Día"
  },
  {
    src: "/img/sima.jpg",
    title: "Sima De Las Cotorras",
    shortDescription: "Un abismo lleno de cotorras.",
    description: "Un abismo natural con cientos de cotorras volando al amanecer.",
    price: "$600.00",
    duration: "1 Día"
  },


];

const paquetes = [
  { src: "/img/CCPAQUETE.jpg", title: "CHIAPA DE CORZO" },
  { src: "/img/SPAQUETES.jpg", title: "SAN CRISTOBAL DE LAS CASAS" },
  { src: "/img/LP.jpg", title: "LAGOS DEL COLON" },
  { src: "/img/sima.jpg", title: "SIMA DE LAS COTORRAS", rating: 4.7 },
  { src: "/img/YP.jpg", title: "YAXCHILAN", rating: 4.7 },

];

const RatingStars = ({ rating, onRate }) => {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "filled" : "empty"}
          onClick={() => onRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activePaqueteIndex, setActivePaqueteIndex] = useState(null);
  const [imageRatings, setImageRatings] = useState(images.map(img => img.initialRating));
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleImageRating = (index, newRating) => {
    setImageRatings((prevRatings) => {
      const updatedRatings = [...prevRatings];
      updatedRatings[index] = newRating;
      return updatedRatings;
    });
  };

  return (
    <>
      {/* Contenedor del logo y la navbar */}
      <div className="nav-container">
        <img src="/img/logoc.png" alt="logo" className="logo" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item"><a className="nav-link" href="#"></a></li>
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
            <h1 className="banner-title">Tours</h1>
            <p className="banner-subtitle">Explora, vive y sorpréndete</p>
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


      {/* cuadro de tours */}
      <div className="cuatours">
        {imgtours.map((img, index) => (
          <div key={index} className="cuatours-item" onClick={() => setSelectedImage(img)}>
            <div className="item-wrapper">
              <img src={img.src} alt={img.title} />
              <div className="item-info">
                <h5>{img.title}</h5>
                <p>{img.shortDescription}</p>
                {/* Precio y Duración */}
                <div className="tour-details">
                  <p><strong>Precio:</strong> {img.price}</p>
                  <p><strong>Duración:</strong> {img.duration}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal con fondo transparente */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.description}</p>
            {/* Precio y Duración */}
            <div className="tour-details">
              <p><strong>Precio:</strong> {selectedImage.price}</p>
              <p><strong>Duración:</strong> {selectedImage.duration}</p>
              <p><strong>Personas</strong> {selectedImage.person}</p>
              <p><strong>Maximo:</strong> {selectedImage.max}</p>
              <p><strong>Minimo:</strong> {selectedImage.min}</p>
              <div className="rating">
                <RatingStars rating={imageRatings[imgtours.indexOf(selectedImage)]} onRate={(rating) => handleImageRating(imgtours.indexOf(selectedImage), rating)} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tours */}
      <div className="single-image-tours">
      <img src="/img/planqueb.jpg" alt="Zona Arqueológica Palenque" className="tours-image" />
      <div className="tours-caption">
        <h1 className="tours-title">Zona Arqueológica Palenque</h1>
        <p className="tours-subtitle">
          Un viaje a Palenque, Chiapas, es una experiencia inolvidable que combina historia, 
          naturaleza y cultura en un solo destino.
        </p>
        
        {/* Información del tour */}
        <div className="tours-details">
          <p><strong>Precio:</strong> $980.00</p>
          <p><strong>Por persona</strong></p>
          <p><strong>Mínimo:</strong> 2 personas</p>
          <p><strong>Máximo:</strong> 10 personas</p>
          <p><strong>Duración:</strong> 1 Día</p>
        </div>
      </div>
    </div>

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

            {/* Rating Interactivo */}
            <div className="rating">
              <RatingStars rating={imageRatings[index]} onRate={(rating) => handleImageRating(index, rating)} />
            </div>
          </div>
        ))}
      </div>


      {/* Paquetes */}
      <div className="App">
        {/* Sección de Paquetes */}
        <section className="paquete-section">
          <div className="paquete-card container">
            <h2 className="paquete-title">Paquetes</h2>
            <div className="paquete-content">
              <div className="paquete-text">
                <h3>Chiapas: Selva, Cultura y Aventura</h3>
                <p>
                  Descubre la esencia de Chiapas en un viaje lleno de naturaleza, historia y tradición. Recorre cañones imponentes,
                  cascadas cristalinas y antiguas ciudades mayas ocultas en la selva. Sumérgete en la cultura de los pueblos indígenas
                  y maravíllate con los paisajes más espectaculares del sureste mexicano.
                </p>

                <div className="line-separator"></div>

                <ul className="paquete-details">
                  <li>$980.00</li>
                  <li>Por persona</li>
                  <li>Minimo 2 personas</li>
                  <li>Maximo 10 personas</li>
                </ul>
                <ul className="paquete-details">
                  <li>Duración del recorrido: 1 Día</li>
                </ul>
              </div>

              {/* Contenedor de imagen principal Paquete */}
              <div className="paquete-image-container">
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

              {/* Rating Interactivo */}
              <div className="rating">
                <RatingStars rating={imageRatings[index]} onRate={(rating) => handleImageRating(index, rating)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* cuadro de tours */}
      <div className="cuapaquetes">
        {imgpaquetes.map((img, index) => (
          <div key={index} className="cuapaquetes-item" onClick={() => setSelectedPackage(img)}>
            <div className="item-wrapper">
              <img src={img.src} alt={img.title} />
              <div className="item-info">
                <h5>{img.title}</h5>
                <p>{img.shortDescription}</p>
                {/* Precio y Duración */}
                <div className="package-details">
                  <p><strong>Precio:</strong> {img.price}</p>
                  <p><strong>Duración:</strong> {img.duration}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal con fondo transparente */}
      {selectedPackage && (
        <div className="modal-overlay" onClick={() => setSelectedPackage(null)}>
          <div className="modal-content">
            <img src={selectedPackage.src} alt={selectedPackage.title} />
            <h3>{selectedPackage.title}</h3>
            <p>{selectedPackage.description}</p>
            {/* Precio y Duración */}
            <div className="package-details">
              <p><strong>Precio:</strong> {selectedPackage.price}</p>
              <p><strong>Duración:</strong> {selectedPackage.duration}</p>
              <p><strong>Personas:</strong> {selectedPackage.person}</p>
              <p><strong>Máximo:</strong> {selectedPackage.max}</p>
              <p><strong>Mínimo:</strong> {selectedPackage.min}</p>
              {/* Rating */}
              <div className="rating">
                <RatingStars
                  rating={imageRatings[imgpaquetes.indexOf(selectedPackage)]}
                  onRate={(rating) => handleImageRating(imgpaquetes.indexOf(selectedPackage), rating)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;

