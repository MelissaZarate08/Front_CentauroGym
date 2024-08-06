import React from "react";
import BarEmpleado from "../../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../../Templates/Footer/Footer";
import CardEmpleado from "../../../Organism/CardEmpleado/CardEmpleado";
import ver from "../../../../assets/iconos/mancuernas.png"
import vender from "../../../../assets/iconos/peso.png"
import registrar from "../../../../assets/iconos/registrar.png"
import './HomeEmpleado.css';

function HomeEmpleado() {
  return (
    <div className="home-empleado">
      <BarEmpleado />
      <div className="card-container">
        <CardEmpleado src={ver} titulo={"Ver Productos"} boton={"Ver"} enlace="/ver-productos" />
        <CardEmpleado src={vender} titulo={"Vender Productos"} boton={"Vender"} enlace="/vender-productos" />
        <CardEmpleado src={registrar} titulo={"Registrar Clientes"} boton={"Registrar"} enlace="/registrar-clientes"/>
      </div>
      <Footer />
    </div>
  );
}

export default HomeEmpleado;
