import React from 'react';
import './CardProductos.css';

function CardProductos({ imagen, nombre, marca, precio, onSell }) {
    return (
        <div className="card-productos">
            <img src={imagen} alt={nombre} className="producto-imagen" />
            <div className="producto-detalle">
                <div className="producto-nombre">{nombre}</div>
                <div className="producto-marca">{marca}</div>
                <div className="producto-precio">{precio}</div>
                <button onClick={onSell} className="button-venta">Vender</button>
            </div>
        </div>
    );
}

export default CardProductos;
