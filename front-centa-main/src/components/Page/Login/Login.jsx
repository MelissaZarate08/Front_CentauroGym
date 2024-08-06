import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import login from "../../../assets/login.jpeg";
import BarHome from "../../Organism/BarHome/BarHome";
import Footer from "../../Templates/Footer/Footer";
import logo from "../../../assets/logoGym.png";
import './Login.css';
import { validateLoginForm, loginUser } from "./LoginLogic"; // Importar funciones

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
        console.log('Email:', email); // Verifica el valor del correo electrónico
        console.log('Password:', password); // Verifica el valor de la contraseña
    
        if (validateLoginForm(email, password)) {
            const role = await loginUser(email, password);
            if (role) {
                switch (role) {
                    case 'Administrador':
                        navigate('/home-administrador'); // Redirige al home del administrador
                        break;
                    case 'Empleado':
                        navigate('/home-empleado'); // Redirige al home del empleado
                        break;
                    default:
                        console.warn('Rol no reconocido:', role);
                }
            }
        }
    };
    

    return (
        <>
            <BarHome src={logo} />
            <div className="login-container">
                <div className="login-box">
                    <div className="login-image-half">
                        <img src={login} alt="Bazar" className="login-img" />
                    </div>
                    <div className="login-form-half">
                        <h2 className="login-heading">Iniciar Sesión</h2>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="login-input-group">
                                <label htmlFor="email" className="login-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Ingresa tu correo"
                                    className="login-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login-input-group">
                                <label htmlFor="password" className="login-label">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingresa tu contraseña"
                                    className="login-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="login-submit-btn">
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
