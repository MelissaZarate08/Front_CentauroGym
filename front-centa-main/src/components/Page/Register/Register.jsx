import React, { useState } from "react";
import Footer from "../../Templates/Footer/Footer";
import logo from "../../../assets/logoGym.png";
import registerImage from "../../../assets/register.jpeg";
import './Register.css';
import { registerUser } from '../Register/RegisterLogic';
import BarAdministrador from "../../Organism/BarAdministrador/BarAdministrador";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(name, email, password, confirmPassword);
    };

    return (
        <>
            <BarAdministrador src={logo} />
            <div className="register-container">
                <div className="register-box">
                    <div className="register-image-half">
                        <img src={registerImage} alt="Registro" className="register-img" />
                    </div>
                    <div className="register-form-half">
                        <h2 className="register-heading">Registrar Empleados</h2>
                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="register-input-group">
                                <label htmlFor="name" className="register-label">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Ingresa el nombre del empleado"
                                    className="register-input"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="register-input-group">
                                <label htmlFor="email" className="register-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Ingresa el correo"
                                    className="register-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="register-input-group">
                                <label htmlFor="password" className="register-label">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingresa la contraseña"
                                    className="register-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="register-input-group">
                                <label htmlFor="confirmPassword" className="register-label">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirma la contraseña"
                                    className="register-input"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="register-submit-btn">
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
