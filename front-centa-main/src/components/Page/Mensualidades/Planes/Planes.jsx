import React from "react";
import { FaDumbbell, FaCalendarAlt, FaClock } from "react-icons/fa";
import CardPlanes from "../../../Molecules/CardPlanes/CardPlanes";
import BarEmpleado from "../../../Organism/BarEmpleado/BarEmpleado";
import BarAdministrador from "../../../Organism/BarAdministrador/BarAdministrador";
import Footer from "../../../Templates/Footer/Footer";
import plan1 from "../../../../assets/planes/plan1.jpg";
import plan2 from "../../../../assets/planes/plan2.jpg";
import plan3 from "../../../../assets/planes/plan3.jpg";
import plan4 from "../../../../assets/planes/plan4.jpg";
import plan5 from "../../../../assets/planes/plan5.jpg";
import { showPlanAlert } from './planesLogic';

import './Planes.css';

const plans = [
    { title: "Plan Básico", price: "$29.99", imageUrl: plan1, features: [{ icon: <FaDumbbell />, text: "Acceso a todas las máquinas" }, { icon: <FaCalendarAlt />, text: "Entrenamientos programados" }, { icon: <FaClock />, text: "Horario flexible" }] },
    { title: "Plan Intermedio", price: "$49.99", imageUrl: plan2, features: [{ icon: <FaDumbbell />, text: "Acceso a todas las máquinas" }, { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" }, { icon: <FaClock />, text: "Evaluación física mensual" }] },
    { title: "Plan Avanzado", price: "$79.99", imageUrl: plan3, features: [{ icon: <FaDumbbell />, text: "Acceso a todas las máquinas y áreas especializadas" }, { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" }, { icon: <FaClock />, text: "Entrenamiento personal semanal" }] },
    { title: "Plan Premium", price: "$99.99", imageUrl: plan4, features: [{ icon: <FaDumbbell />, text: "Acceso completo a todas las máquinas y áreas premium" }, { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" }, { icon: <FaClock />, text: "Entrenamiento personal ilimitado" }] },
    { title: "Plan Familiar", price: "$129.99", imageUrl: plan5, features: [{ icon: <FaDumbbell />, text: "Acceso a todas las máquinas y áreas del gimnasio para toda la familia" }, { icon: <FaCalendarAlt />, text: "Clases grupales ilimitadas" }, { icon: <FaClock />, text: "Clases para niños" }] }
];

function Planes() {
    const roleName = localStorage.getItem('role_name');

    return (
        <div className="planes-container">
            {roleName === 'Administrador' ? <BarAdministrador /> : <BarEmpleado />}
            <div className="planes-header">
                <h2>Aquí puedes ver los planes disponibles</h2>
            </div>
            <div className="card-container">
                {plans.map((plan, index) => (
                    <CardPlanes
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        imageUrl={plan.imageUrl}
                        features={plan.features}
                        onClick={() => showPlanAlert(plan)}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Planes;
