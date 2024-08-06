import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Molecules/Banner/Banner";
import BarHome from "./components/Organism/BarHome/BarHome";
import home from "./assets/ImageGym.jpg";
import Logo from "./assets/logoGym.png";
import home1 from "./assets/productos/admin1.png";
import home2 from "./assets/productos/Aguas.png";
import home3 from "./assets/productos/Sueros.png";
import user from "./assets/clienteIcono.png";
import Footer from "./components/Templates/Footer/Footer";
import { showWelcomeAlert } from "./AppLogic";
import { FaMedal } from "react-icons/fa";
import Swal from "sweetalert2";

function App() {
  const [points, setPoints] = useState(0);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    showWelcomeAlert().then(() => {
      setPoints(50);
    });
  }, []);

  const handleIconClick = () => {
    Swal.fire({
      title: "¡Puntos Obtenidos!",
      text: `Tienes ${points} puntos.`,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - 25,
        y: e.clientY - 25,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <BarHome src={Logo} />
      <div
        className="floating-icon"
        title="Puntos Gym"
        onClick={handleIconClick}
        onMouseDown={handleMouseDown}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: "fixed",
        }}
      >
        <FaMedal className="gym-icon" />
      </div>
      <Banner
        src={home}
        Titulo={"CENTAURO GYM"}
        Subtitulo={"(PESAS - TRAINING - FUNCIONAL - FIT)"}
        Parrafo={
          "¡Bienvenidos a Centauro Gym! Ofrecemos un ambiente inclusivo y motivador, con atención personalizada y entrenadores calificados. Nuestro objetivo es ayudarte a alcanzar tus metas de salud y fitness con un compromiso total con tu bienestar. ¡Únete a nosotros y transforma tu vida!"
        }
      />
      <h1 className="titulo-home">PRODUCTOS</h1>
      <div className="images-container">
        <div className="image-wrapper">
          <img src={home1} alt="Producto 1" className="product-image" />
          <p className="image-label">Proteinas</p>
        </div>
        <div className="image-wrapper">
          <img src={home2} alt="Producto 2" className="product-image" />
          <p className="image-label">Aguas</p>
        </div>
        <div className="image-wrapper">
          <img src={home3} alt="Producto 3" className="product-image" />
          <p className="image-label">Sueros</p>
        </div>
      </div>
      <h1 className="titulo-home">NUESTROS COUCHES</h1>
      <div className="user-bar">
        <div className="user-images">
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 1" className="user-image" />
            <p className="user-name">Jose Miguel</p>
          </div>
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 2" className="user-image" />
            <p className="user-name">Pablo Guardado</p>
          </div>
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 3" className="user-image" />
            <p className="user-name">Andres Sospo</p>
          </div>
          <div className="user-image-wrapper">
            <img src={user} alt="Usuario 4" className="user-image" />
            <p className="user-name">Natalia Ruiz</p>
          </div>
        </div>
      </div>
      <div className="video-section">
        <div className="video-content">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ES3IRCCl0eI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="small-videos">
            <div className="small-video-wrapper">
              <iframe
                width="100%"
                height="150"
                src="https://www.youtube.com/embed/xP4iItH8HBU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="small-video-wrapper">
              <iframe
                width="100%"
                height="150"
                src="https://www.youtube.com/embed/yZbjNdccibQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="small-video-wrapper">
              <iframe
                width="100%"
                height="150"
                src="https://www.youtube.com/embed/z37eeShFeHY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="small-video-wrapper">
              <iframe
                width="100%"
                height="150"
                src="https://www.youtube.com/embed/44FltTwyIj0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="video-sidebar">
          <div className="video-sidebar-item">
            <img src={home1} alt="Imagen 1" className="sidebar-image" />
            <div className="sidebar-text">
              <h3 className="sidebar-title">Título 1</h3>
              <p className="sidebar-description">Descripción 1</p>
            </div>
          </div>
          <div className="video-sidebar-item">
            <img src={home2} alt="Imagen 2" className="sidebar-image" />
            <div className="sidebar-text">
              <h3 className="sidebar-title">Título 2</h3>
              <p className="sidebar-description">Descripción 2</p>
            </div>
          </div>
          <div className="video-sidebar-item">
            <img src={home3} alt="Imagen 3" className="sidebar-image" />
            <div className="sidebar-text">
              <h3 className="sidebar-title">Título 3</h3>
              <p className="sidebar-description">Descripción 3</p>
            </div>
          </div>
          <div className="video-sidebar-item">
            <img src={home1} alt="Imagen 4" className="sidebar-image" />
            <div className="sidebar-text">
              <h3 className="sidebar-title">Título 4</h3>
              <p className="sidebar-description">Descripción 4</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
