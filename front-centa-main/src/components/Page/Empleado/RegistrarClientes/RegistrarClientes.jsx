import React, { useState } from "react";
import Swal from "sweetalert2";
import BarEmpleado from "../../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../../Templates/Footer/Footer";
import './RegistrarClientes.css';

const RegistrarClientes = () => {
    const [clienteNombre, setClienteNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [coach, setCoach] = useState('no');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseFloat(precio) < 0) {
            Swal.fire({
                title: 'Error',
                text: 'El precio no puede ser negativo',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            return;
        }
        registerClient(clienteNombre, precio, coach);
    };

    const registerClient = (name, price, coach) => {
        fetch(`${import.meta.env.VITE_API_URL}/api/monthlypayment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                precio: parseFloat(price) || 0,
                coach: coach === 'yes' ? 'yes' : 'no',
                created_by: 'Empleado',
                updated_by: 'Empleado',
                deleted: false,
            }),
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: 'Éxito',
                text: 'Cliente registrado con éxito',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
        })
        .catch(error => {
            Swal.fire({
                title: 'Error',
                text: 'Error al registrar el cliente',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });
    };

    return (
        <>
            <BarEmpleado />
            <div className="registrar-clientes-container">
                <div className="registrar-clientes-box">
                    <h2 className="registrar-clientes-heading">Registrar Cliente</h2>
                    <form className="registrar-clientes-form" onSubmit={handleSubmit}>
                        <div className="registrar-clientes-input-group">
                            <label htmlFor="clienteNombre" className="registrar-clientes-label">Nombre del Cliente</label>
                            <input
                                type="text"
                                id="clienteNombre"
                                placeholder="Ingresa el nombre del cliente"
                                className="registrar-clientes-input"
                                value={clienteNombre}
                                onChange={(e) => setClienteNombre(e.target.value)}
                            />
                        </div>
                        <div className="registrar-clientes-input-group">
                            <label htmlFor="precio" className="registrar-clientes-label">Precio a Pagar</label>
                            <input
                                type="number"
                                id="precio"
                                placeholder="Ingresa el precio a pagar"
                                className="registrar-clientes-input"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                min="0" // Previene números negativos
                            />
                        </div>
                        <div className="registrar-clientes-input-group">
                            <label htmlFor="coach" className="registrar-clientes-label">¿Solicitó Coach?</label>
                            <select
                                id="coach"
                                className="registrar-clientes-input"
                                value={coach}
                                onChange={(e) => setCoach(e.target.value)}
                            >
                                <option value="no">No</option>
                                <option value="yes">Sí</option>
                            </select>
                        </div>
                        <button type="submit" className="registrar-clientes-submit-btn">
                            Registrar
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RegistrarClientes;
