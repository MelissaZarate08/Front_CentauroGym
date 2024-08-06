import React from "react";
import { useNavigate } from 'react-router-dom';
import './CardAdministrador.css';

const CardAdministrador = ({ imageSrc, title, description, buttonText, onClick: link }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            navigate(link);
        }
    };

    return (
        <div className="card-administrador">
            <img src={imageSrc} alt="Icono" className="card-icon" />
            <div className="card-administrador-content">
                <h3 className="card-administrador-h3">{title}</h3>
                <p className="card-administrador-p">{description}</p>
                <button className="card-administrador-button" onClick={handleClick}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CardAdministrador;
