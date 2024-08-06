import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './BarEmpleado.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../../assets/logoGym.png";

function BarEmpleado() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token'); // Obtén el token para verificar si la sesión está iniciada

    const handleLogout = () => {
        // Elimina el token y el rol del localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('role_name');
        
        // Redirige al usuario a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <div className="header-container">
            <img src={logo} alt="Logo" className="header-logo" />
            <div className="header-links">
                <a href="/home-empleado" className="header-link">Home</a>
                <a href="/ver-productos" className="header-link">Ver Productos</a>
                <a href="/vender-productos" className="header-link">Vender Productos</a>
                <a href="/planes" className='header-link'>Planes</a>
                <a href="/clientes-registrados" className="header-link">Clientes Registrados</a>
            </div>
            {token ? (
                <button onClick={handleLogout} className="header-button">
                    <FontAwesomeIcon icon={faUser} /> Cerrar sesión
                </button>
            ) : (
                <Link to="/login" className="header-button">
                    <FontAwesomeIcon icon={faUser} /> Iniciar sesión
                </Link>
            )}
        </div>
    );
}

export default BarEmpleado;
