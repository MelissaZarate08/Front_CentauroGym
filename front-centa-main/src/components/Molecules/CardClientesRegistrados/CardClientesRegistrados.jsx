import React from "react";
import './CardClientesRegistrados.css';
import { FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CardClientesRegistrados = ({ nombre, pago = 0, coach, id, onDelete }) => {
    const handleDeleteClick = (e) => {
        e.stopPropagation();
        console.log("ID del cliente a eliminar:", id);  // Verifica el id
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás recuperar este cliente una vez eliminado.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(id);
            }
        });
    };

    const payment = typeof pago === 'number' ? pago : 0;

    return (
        <div className="card-clientes">
            <div className="card-clientes-header">
                <h3 className="card-clientes-title">{nombre}</h3>
            </div>
            <div className="card-clientes-body">
                <p className="card-clientes-payment">Pago: ${payment.toFixed(2)}</p>
                <div className="card-clientes-coach">
                    <span>Coach: </span>
                    {coach ? <FaCheckCircle className="icon-yes" /> : <FaTimesCircle className="icon-no" />}
                </div>
                <button onClick={handleDeleteClick} className="card-clientes-delete-btn">
                    <FaTrash /> Eliminar
                </button>
            </div>
        </div>
    );
};

export default CardClientesRegistrados;
