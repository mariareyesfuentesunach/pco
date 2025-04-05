import React, { useState } from "react";
import { useEffect, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Carousel } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
    duration: "1 Día",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
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
    duration: "1 Día",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
  },
  {
    src: "/img/sima.jpg",
    title: "Sima De Las Cotorras",
    shortDescription: "Un abismo lleno de cotorras.",
    description: "Un abismo natural con cientos de cotorras volando al amanecer.",
    price: "$600.00",
    duration: "1 Día",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
  },

];

const imgpaquetes = [
  {
    src: "/img/AventuraChiapaneca.png",
    title: "Aventura Chiapaneca",
    shortDescription: "Explora lo mejor de Chiapas en una travesía llena de naturaleza y aventura",
    description: "Lugares incluidos: Cañón del Sumidero, San Cristóbal de las Casas, Lagunas de Montebello, El Chiflón, Cascadas de Agua Azul",
    price: "$5,500.00",
    duration: "3 días y 2 noches",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
  },
  {
    src: "/img/MaravillasdeChiapas.png",
    title: "Maravillas de Chiapas ",
    shortDescription: "Historia, cultura y belleza natural en un recorrido inolvidable.",
    description: "Lugares incluidos: Cañón del Sumidero, Chiapa de Corzo, El Chiflón, Lagunas de Montebello, San Cristóbal de las Casas.",
    price: "$6500.00",
    duration: "3 días y 2 noches",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
  },
  {
    src: "/img/SelvayAventura.png",
    title: "Selva y Aventura",
    shortDescription: "Explora la selva chiapaneca y descubre sitios arqueológicos únicos.",
    description: "Lugares incluidos: Yaxchilán, Bonampak, Las Guacamayas, Laguna Miramar, Las Nubes.",
    price: "$8,900.00",
    duration: "5 días y 4 noches",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
  },
  {
    src: "/img/RutadelaNaturaleza.png",
    title: "Ruta de la Narureza",
    shortDescription: "Conéctate con la naturaleza entre cuevas, lagunas y cascadas.",
    description: "Lugares incluidos:El Arcotete, Grutas de Rancho Nuevo, Laguna de Metzabok, El Chiflón.",
    price: "$9,560.00",
    duration: "4 días y 3 noches",
    person: "Personas",
    max: "Maximo 10 personas",
    min: "Minimo 2 personas"
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
    <div className="stars" onClick={(e) => e.stopPropagation()}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "filled" : "empty"}
          onClick={(e) =>
            e.stopPropagation() || onRate(star)
          }

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

  window.addEventListener('scroll', function () {
    const widget = document.querySelector('.floating-widget');

    // Si el usuario ha hecho scroll hacia abajo (más de 100px), mostrar el widget con animación
    if (window.scrollY > 100) {
      widget.style.opacity = '1';  // Muestra el widget
      widget.style.transform = 'translateY(0)';  // Aplica la animación de caída
    } else {
      widget.style.opacity = '0';  // Oculta el widget cuando el usuario está en la parte superior
      widget.style.transform = 'translateY(-120vh)';  // Hace que el widget desaparezca hacia arriba
    }
  });
  
function ScrollButton() {
  const scrollRef = useRef(null);

  const handleScrollClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Solo sube, nunca baja
  };

  return (
    <button onClick={handleScrollClick} className="scroll-button">
      <img src="img/avi.png" alt="Scroll Button" className="scroll-image" />
    </button>
  );
}

  //Abrir el correo de ayuda de chiapas oculto//
  const handleEmailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=chiapasoculto.mx@gmail.com&su=Viajes&body=Quiero más información", "_blank");
  };

  //ABRIR WHATSAPP//
  const handleWhatsAppClick = () => {
    const phoneNumber = '529612252444'; // Agrega el código de país si es necesario
    const message = '¡Hola!%20Podrías%20darme%20más%20información....';
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  //UBICACION//
  const handleLocationClick = () => {
    const googleMapsLink = 'https://maps.app.goo.gl/tykKyLH4pWjCx5jj8';
    window.open(googleMapsLink, '_blank'); // Abre la ubicación en una nueva pestaña
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
                <li className="nav-item"><a className="nav-link" href="#Tours">TOURS</a></li>
                <li className="nav-item"><a className="nav-link" href="#paquetes">PAQUETES</a></li>
                <li className="nav-item"><a className="nav-link" href="#contacto">CONTACTO</a></li>
                <li className="nav-item"><a className="nav-link" href="#Nosotros">NOSOTROS</a></li>

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
            <p className="banner-subtitle">Experiencias inolvidables en los rincones más espectaculares de Chiapas</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="/img/c8.jpg" alt="Cañón del Sumidero" />
          <Carousel.Caption>
            <h1 className="banner-title">Paquetes</h1>
            <p className="banner-subtitle">Combinaciones perfectas para vivir Chiapas al máximo</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      

      <div className="customt-table" id="tours">
        <div className="customt-row header">
          <div className="customt-cell">
            <h2 id="Tours"><b>TOURS</b></h2>
          </div>
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
          <img src="/img/palenque.jpg" alt="Zona Arqueológica Palenque" className="tours-image" />
          <div className="tours-caption">
            <h1 className="tours-title">Zona Arqueológica Palenque</h1>
            <p className="tours-subtitle">
              Un viaje a Palenque, Chiapas, es una experiencia inolvidable <br></br>
              que combina historia, naturaleza y cultura en un solo destino.
            </p>
            <div className="line-separatort"></div>
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
      </div>

      <div className="custom-table" id="paquetes">
        <div className="custom-row header">
          <div className="custom-cell">
            <h2 id="Paquetes"><b>PAQUETES</b></h2>
          </div>
        </div>
        {/* cuadro de paquetes */}
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

        {/* Paquetes */}
        <div className="App">
          {/* Sección de Paquetes */}
          <div className="single-image-paquete">
            <img src="/img/Paquete.png" alt="Zona Arqueológica Palenque" className="paquete-image" />
            <div className="paquete-caption">
              <h1 className="paquete-title">Chiapas: Selva, Cultura y Aventura</h1>
              <p className="paquete-subtitle">
                Descubre la esencia de Chiapas en un viaje lleno de naturaleza, historia y tradición. Recorre cañones imponentes,
                cascadas cristalinas y antiguas ciudades mayas ocultas en la selva. Sumérgete en la cultura de los pueblos indígenas
                y maravíllate con los paisajes más espectaculares del sureste mexicano.
              </p>
              <div className="line-separator"></div>
              {/* Información del tour */}
              <div className="paquete-details">
                <p><strong>Precio:</strong> $2,200.00</p>
                <p><strong>Por persona</strong></p>
                <p><strong>Mínimo:</strong> 2 personas</p>
                <p><strong>Máximo:</strong> 10 personas</p>
                <p><strong>Duración:</strong> 5 Días</p>
              </div>
            </div>
          </div>

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
      </div>

      {/* Contacto */}
      <div className="custom-table" id="paquetes">
        <div className="custom-row header">
          <div className="custom-cell">
            <h2 id="contacto"><b>CONTACTO</b></h2>
          </div>
        </div>

        <div className="card-container" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>
          <div className="custom-card">
            <div className="title-container">
              <img src="/img/phone-call.png" alt="Phone" className="icon" />
              <h5>Teléfono</h5>
            </div>
            <p>961 225 2444</p>
          </div>

          <div className="custom-card1" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            <div className="title-container">
              <img src="/img/mail.png" alt="Email" className="icon" />
              <h5>Correo Electrónico</h5>
            </div>
            <p>chiapasoculto.mx@gmail.com</p>
          </div>


          <div className="custom-card2" onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
            <div className="title-container">
              <img src="/img/ubi.png" alt="Location" className="icon" />
              <h5>Localización</h5>
            </div>
            <p>Tuxtla Gutiérrez, Chiapas</p>
          </div>
        </div>

        {/* Mapa */}
        <div className="map-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.2520976260066!2d-93.1615037196592!3d16.753989542849478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd90ceaaaaaab%3A0xb2eab6edb5a1fd53!2sUnach%20Campus%201!5e1!3m2!1ses!2smx!4v1743343441879!5m2!1ses!2smx"
            width="1350"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Nosotros */}
      <div className="nosotros-container">
        <h1 className="title" id="Nosotros">Nosotros</h1>
        <div className="section hover-animation">
          <div className="text-container">
            <h5 className="titulos">Misión</h5>
            <p>
              Brindar a nuestros clientes experiencias inolvidables al descubrir
              los tesoros ocultos de Chiapas, con servicios de alta calidad y
              guiados por expertos locales. Nos comprometemos a proteger el
              patrimonio cultural y natural, fomentar la economía local y
              garantizar que cada viaje contribuya al desarrollo sostenible de
              las comunidades que visitamos.
            </p>
          </div>

          <div key={1} className="cuapaquetes-item">
            <img src="/img/mision.png" alt="Misión" className="image" />
          </div>
        </div>

        <div className="section reverse hover-animation">
          <div key={2} className="cuapaquetes-item">
            <img src="/img/vision.png" alt="Visión" className="image" />
          </div>

          <div className="text-container">
            <h5 className="titulos">Visión</h5>
            <p>
              Ser la agencia de viajes líder en ofrecer experiencias auténticas y
              personalizadas en los rincones más desconocidos y mágicos de
              Chiapas, conectando a los viajeros con la riqueza natural, cultural
              y ancestral de la región, y promoviendo el turismo responsable y
              sostenible.
            </p>
          </div>
        </div>
      </div>

      {/* pie de pagina */}
      <footer className="footer-container">
        <div className="footer-content">
          {/*Redes y logo) */}
          <div className="left-section">
            <div className="social-box">
              <h6>Redes Sociales</h6>
              <div className="social-item">
                <a
                  href="https://www.facebook.com/profile.php?id=61574799724141"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img src="/img/facebook.png" alt="Facebook" className="icon" />

                </a>
                <p className="redes">Chiapas Oculto</p>
              </div>


              <div className="social-item">
                <a
                  href="https://www.instagram.com/chiapas_oculto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img src="/img/insta.png" alt="Instagram" className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/chiapas_oculto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <p className="redes">@ChiapasOculto</p>

                </a>
              </div>

              <div className="whatsapp-container" onClick={handleWhatsAppClick}>
                <img src="/img/whatss.png" alt="WhatsApp" className="whatsapp-icon" />
                <p className="whatsapp-text">Resolver tus dudas</p>
              </div>

              

            </div>

            <div className="logo-box">
              <img src="/img/logoc.png" alt="Avión" className="plane-icon" />
            </div>
          </div>

          {/* Contenedor */}
          <div className="info-box">
            <div className="info-content">
              <h6>Servicio al cliente</h6>
              <p className="info-text">Contacto</p>
              <p className="info-text">Mi cuenta</p>
            </div>
            <div className="info-content">
              <h6>Tours destacados</h6>
              <p className="info-text">El Arcote.</p>
              <p className="info-text">Lagunas de Montebello.</p>
              <p className="info-text">Zona Arqueológica De Palenque.</p>
              <p className="info-text">Zona Arqueológica De Tonina.</p>
            </div>
            <div className="info-content">
              <h6>Paquetes destacados</h6>
              <p className="info-text">Arqueología y Selva.</p>
              <p className="info-text">Paraíso en la Selva.</p>
              <p className="info-text">Expedición Chiapaneca.</p>
              <p className="info-text">Rutas Mágicas de Chiapas.</p>
            </div>


            <table className="ubicacion">
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://maps.app.goo.gl/j5ufmUNDSNJDuiNN9"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <img src="/img/ubi.png" className="ubi" alt="Ubicación" />

                    </a>
                  </td>

                  <td>
                    <a
                      href="https://maps.app.goo.gl/j5ufmUNDSNJDuiNN9"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <p>Ver Ubicación</p>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
      
      <div class="floating-widget">
        <ScrollButton />
      </div>

    </>
  );
};

export default App;