import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './BarAdministrador.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import logo from "../../../assets/logoGym.png";
import Swal from 'sweetalert2';

function BarAdministrador() {
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Cerrar sesión eliminará tu sesión actual.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00aaff',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token');
                localStorage.removeItem('role_name');
                navigate('/login');
            }
        });
    };

    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <div className="header-wrapper">
            <img src={logo} alt="Logo" className="header-logo" />
            <div className="header-menu">
                <a href="/home-administrador" className="header-item">Home</a>
                <a href="/agregar-productos" className="header-item">Agregar Productos</a>
                <a href="/planes" className='header-item'>Planes</a>
                <a href="/ver-productos-agregados" className='header-item'>Ver Productos</a>
            </div>
            <div className="header-login">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="header-logout">
                        Cerrar sesión
                    </button>
                ) : (
                    <Link to="/login" className="header-login-link">
                        <FontAwesomeIcon icon={faUser} /> Iniciar sesión
                    </Link>
                )}
            </div>
        </div>
    );
}

export default BarAdministrador;
