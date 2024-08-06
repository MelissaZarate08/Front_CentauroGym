import React from "react";
import BarAdministrador from "../../../Organism/BarAdministrador/BarAdministrador";
import Footer from "../../../Templates/Footer/Footer";
import CardAdministrador from "../../../Organism/CardAdministrador/CardAdministrador";
import empleado from "../../../../assets/iconos/empleado.png";
import addProduct from "../../../../assets/iconos/agregar-producto.png"
import addRutina from "../../../../assets/iconos/planes.png"
import './Administrador.css';

function HomeAdministrador() {
    return (
        <div className="home-administrador-container">
            <BarAdministrador />
            <div className="cards-container">
                <CardAdministrador
                    imageSrc={addProduct}
                    title={"Agregar Productos"}
                    description={"Aquí podrás agregar productos a tu gimnasio."}
                    buttonText={"Agregar productos"}
                    onClick="/agregar-productos"
                />
                <CardAdministrador
                    imageSrc={addRutina}
                    title={"Planes"}
                    description={"Aquí podrás ver los planes disponibles."}
                    buttonText={"Ver planes"}
                    onClick="/planes"
                />
                <CardAdministrador
                    imageSrc={empleado}
                    title={"Agregar empleado"}
                    description={"Aquí podrás agregar un nuevo empleado."}
                    buttonText={"Agregar"}
                    onClick="/register"
                />
            </div>
            <Footer />
        </div>
    );
}

export default HomeAdministrador;
