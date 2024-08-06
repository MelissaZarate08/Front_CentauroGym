import React from "react";
import Swal from "sweetalert2";
import { FaDumbbell, FaCalendarAlt, FaClock } from "react-icons/fa";
import CardPlanes from "../../../Molecules/CardPlanes/CardPlanes";
import BarHome from "../../../Organism/BarHome/BarHome";
import Footer from "../../../Templates/Footer/Footer";
import plan1 from "../../../../assets/planes/plan1.jpg";
import plan2 from "../../../../assets/planes/plan2.jpg";
import plan3 from "../../../../assets/planes/plan3.jpg";
import plan4 from "../../../../assets/planes/plan4.jpg";
import plan5 from "../../../../assets/planes/plan5.jpg";
import logo from "../../../../assets/logoGym.png"
import './PlanesHome.css';

function PlanesHome() {
    const handleClick = () => {
        Swal.fire({
            title: '¡Atención!',
            text: "Dirígete con un empleado para completar tu compra, por favor.",
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    };

    return (
        <div className="planes-home-container">
            <BarHome src={logo}/>
            <div className="planes-home-header">
                <h2>Aquí puedes ver los planes disponibles</h2>
            </div>
            <div className="planes-home-card-container">
                <CardPlanes
                    title="Plan Básico"
                    description="Ideal para quienes comienzan su viaje fitness."
                    price="$29.99/mes"
                    imageUrl={plan1}
                    features={[
                        { icon: <FaDumbbell />, text: "Acceso a todas las máquinas" },
                        { icon: <FaCalendarAlt />, text: "Entrenamientos programados" },
                        { icon: <FaClock />, text: "Horario flexible" }
                    ]}
                    onClick={handleClick}
                />
                <CardPlanes
                    title="Plan Intermedio"
                    description="Para quienes buscan una rutina más estructurada con acceso a clases grupales."
                    price="$49.99/mes"
                    imageUrl={plan2}
                    features={[
                        { icon: <FaDumbbell />, text: "Acceso a todas las máquinas" },
                        { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" },
                        { icon: <FaClock />, text: "Evaluación física mensual" }
                    ]}
                    onClick={handleClick}
                />
                <CardPlanes
                    title="Plan Avanzado"
                    description="Ideal para atletas o entusiastas del fitness que buscan entrenamientos intensivos y personalizados."
                    price="$79.99/mes"
                    imageUrl={plan3}
                    features={[
                        { icon: <FaDumbbell />, text: "Acceso a todas las máquinas y áreas especializadas" },
                        { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" },
                        { icon: <FaClock />, text: "Entrenamiento personal semanal" }
                    ]}
                    onClick={handleClick}
                />
                <CardPlanes
                    title="Plan Premium"
                    description="Para aquellos que desean una experiencia completa con acceso a todas las instalaciones y servicios premium."
                    price="$99.99/mes"
                    imageUrl={plan4}
                    features={[
                        { icon: <FaDumbbell />, text: "Acceso completo a todas las máquinas y áreas premium" },
                        { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" },
                        { icon: <FaClock />, text: "Entrenamiento personal ilimitado" }
                    ]}
                    onClick={handleClick}
                />
                <CardPlanes
                    title="Plan Familiar"
                    description="Perfecto para familias que desean mantenerse activas juntas con descuentos especiales."
                    price="$129.99/mes"
                    imageUrl={plan5}
                    features={[
                        { icon: <FaDumbbell />, text: "Acceso a todas las máquinas y áreas del gimnasio para toda la familia" },
                        { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" },
                        { icon: <FaClock />, text: "Clases para niños" }
                    ]}
                    onClick={handleClick}
                />
            </div>
            <Footer />
        </div>
    );
}

export default PlanesHome;
