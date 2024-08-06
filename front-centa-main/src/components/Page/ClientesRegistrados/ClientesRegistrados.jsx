import React, { useEffect, useState } from "react";
import BarEmpleado from "../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../Templates/Footer/Footer";
import CardClientesRegistrados from "../../Molecules/CardClientesRegistrados/CardClientesRegistrados";
import Swal from "sweetalert2";
import './ClientesRegistrados.css';

const ClientesRegistrados = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/monthlypayment`)
            .then(response => response.json())
            .then(data => {
                console.log("Datos recibidos de la API:", data); // Verificar la respuesta
                if (Array.isArray(data)) {
                    // Filtrar clientes para evitar números negativos
                    const clientesValidos = data.map(cliente => ({
                        ...cliente,
                        precio: Math.max(0, cliente.precio) // Asegurar que el precio no sea negativo
                    }));
                    setClientes(clientesValidos);
                } else {
                    console.error("La API no devolvió un array:", data);
                    setClientes([]); // Manejar el caso de error
                }
            })
            .catch(error => console.error('Error al obtener los clientes:', error));
    }, []);

    const handleDelete = (id) => {
        console.log("ID del cliente a eliminar:", id); // Verificar ID
        fetch(`${import.meta.env.VITE_API_URL}/api/monthlypayment/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                setClientes(prevClientes => prevClientes.filter(cliente => cliente.monthly_payment_id !== id));
                Swal.fire({
                    title: 'Eliminado',
                    text: 'Cliente eliminado con éxito.',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                });
            } else {
                throw new Error('Error en la respuesta de la API');
            }
        })
        .catch(error => {
            Swal.fire({
                title: 'Error',
                text: 'Error al eliminar el cliente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });
    };

    return (
        <div className="clientes-registrados-container">
            <BarEmpleado />
            <div className="cards-container">
                {clientes.map(cliente => (
                    <CardClientesRegistrados
                        key={cliente.monthly_payment_id}
                        nombre={cliente.name}
                        pago={cliente.precio}
                        coach={cliente.coach === 'yes'}
                        id={cliente.monthly_payment_id}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ClientesRegistrados;
