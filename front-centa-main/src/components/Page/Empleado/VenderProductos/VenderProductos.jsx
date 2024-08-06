import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BarEmpleado from "../../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../../Templates/Footer/Footer";
import { useVenderProductoLogic } from './VenderProductoLogic';
import './VenderProductos.css';

function VenderProductos() {
    const location = useLocation();
    const { product } = location.state || {};
    const [formData, setFormData] = useState({
        price: product ? product.precio : '',
        id: product ? product.product_id : '',
        name: product ? product.name : '',
        brand: product ? product.marca : '',
        cantidad: ''
    });
    const [reference, setReference] = useState('');
    const { handleGeneratePDF, handleConfirm, validateFormData } = useVenderProductoLogic();

    useEffect(() => {
        if (product) {
            setFormData({
                price: product.precio,
                id: product.product_id,
                name: product.name,
                brand: product.marca,
                cantidad: ''
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFormData(formData)) {
            handleConfirm(setReference, formData);
        }
    };

    return (
        <div className="page-container">
            <BarEmpleado />
            <div className="form-container">
                <h2>Vender Producto</h2>
                <form className="product-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="price">Precio</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="form-group-input"
                            value={formData.price}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id">ID</label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            className="form-group-input"
                            value={formData.id}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-group-input"
                            value={formData.name}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Marca</label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            className="form-group-input"
                            value={formData.brand}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cantidad">Cantidad</label>
                        <input
                            type="text"
                            id="cantidad"
                            name="cantidad"
                            className="form-group-input"
                            placeholder="Cantidad"
                            value={formData.cantidad}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="button-venta">
                        Confirmar Venta
                    </button>
                </form>
                {reference && (
                    <div className="reference-container">
                        <h3>Referencia de Pago</h3>
                        <p>{reference}</p>
                        <button className="button-venta" onClick={() => handleGeneratePDF(reference, formData)}>
                            Descargar Recibo
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default VenderProductos;
