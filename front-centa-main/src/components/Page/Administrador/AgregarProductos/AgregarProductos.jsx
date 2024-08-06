import React, { useState } from "react";
import BarAdministrador from "../../../Organism/BarAdministrador/BarAdministrador";
import Footer from "../../../Templates/Footer/Footer";
import { FaBox, FaTag, FaDollarSign, FaImage } from 'react-icons/fa'; // Import icons
import Swal from 'sweetalert2'; // Import SweetAlert2
import './AgregarProductos.css';

const AgregarProductos = () => {
    const [formData, setFormData] = useState({
        name: '',
        marca: '',
        precio: '',
        image: null,
        imagePreview: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({
                ...formData,
                image: files[0],
                imagePreview: URL.createObjectURL(files[0])
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (parseFloat(formData.precio) < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El precio no puede ser negativo.',
            });
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('marca', formData.marca);
        formDataToSend.append('precio', formData.precio);
        if (formData.image) {
            formDataToSend.append('image', formData.image);
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const data = await response.json();
                Swal.fire({
                    icon: 'success',
                    title: 'Producto agregado',
                    text: `El producto ${data.name} ha sido agregado con éxito.`,
                });
                setFormData({
                    name: '',
                    marca: '',
                    precio: '',
                    image: null,
                    imagePreview: null
                });
            } else {
                const errorData = await response.json();
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: errorData.message || 'No se pudo agregar el producto.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ocurrió un error al agregar el producto.',
            });
        }
    };

    return (
        <>
            <BarAdministrador />
            <div className="productos-form-page">
                <h2 className="productos-form-title">Agregar Producto</h2>
                <div className="productos-form-container">
                    <form onSubmit={handleSubmit} className="productos-form">
                        <div className="productos-form-group">
                            <label htmlFor="name" className="productos-form-label">
                                <FaBox className="productos-form-icon" />
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Nombre del producto"
                                className="productos-form-input"
                            />
                        </div>
                        <div className="productos-form-group">
                            <label htmlFor="marca" className="productos-form-label">
                                <FaTag className="productos-form-icon" />
                                Marca
                            </label>
                            <input
                                type="text"
                                id="marca"
                                name="marca"
                                value={formData.marca}
                                onChange={handleChange}
                                required
                                placeholder="Marca del producto"
                                className="productos-form-input"
                            />
                        </div>
                        <div className="productos-form-group">
                            <label htmlFor="precio" className="productos-form-label">
                                <FaDollarSign className="productos-form-icon" />
                                Precio
                            </label>
                            <input
                                type="number"
                                id="precio"
                                name="precio"
                                value={formData.precio}
                                onChange={handleChange}
                                required
                                placeholder="Precio del producto"
                                className="productos-form-input"
                                min="0"
                            />
                        </div>
                        <div className="productos-form-group">
                            <label htmlFor="image" className="productos-form-label">
                                <FaImage className="productos-form-icon" />
                                Imagen
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="productos-form-file-input"
                            />
                        </div>
                        {formData.imagePreview && (
                            <div className="productos-image-preview">
                                <img src={formData.imagePreview} alt="Vista previa" className="productos-image-preview-img"/>
                            </div>
                        )}
                        <button type="submit" className="productos-submit-button">Agregar Producto</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AgregarProductos;
