import React from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import './CardEmpleado.css'; 

const CardEmpleado = ({ src, titulo, parrafo, boton, enlace }) => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleButtonClick = () => {
    if (enlace) {
      navigate(enlace); // Usa navigate para redirigir
    }
  };

  return (
    <div className="card-empleado">
      <div className="card-icon-empleado">
        <img
          src={src} 
          alt="Icono"
          className="card-image-empleado"
        />
      </div>
      <h2 className="card-title-empleado">{titulo}</h2>
      <p className="card-description-empleado">
        {parrafo}
      </p>
      <button className="card-button-empleado" onClick={handleButtonClick}>
        {boton}
      </button>
    </div>
  );
};

export default CardEmpleado;
