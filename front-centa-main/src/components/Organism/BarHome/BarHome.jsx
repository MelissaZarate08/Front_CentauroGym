import React from 'react';
import { Link } from 'react-router-dom'; 
import './BarHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de usuario

function BarHome({src}) {
    return (
        <div className="navbar">
            <img src={src} alt="Logo" className="navbar-logo" />
            <div className="navbar-links">
                <a href="/" className="navbar-link">Home</a>
                <a href="/ver-productos-home" className="navbar-link">Productos</a>
                <a href="/planes-home" className="navbar-link">Mensualidades</a>
                <a href="#rutinas" className="navbar-link">Rutinas</a>
            </div>
            <Link to="/login" className="navbar-button">
                <FontAwesomeIcon icon={faUser} /> Iniciar sesión
            </Link>
        </div>
    );
}

export default BarHome;
