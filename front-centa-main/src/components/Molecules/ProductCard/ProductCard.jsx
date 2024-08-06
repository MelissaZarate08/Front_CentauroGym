import React from 'react';
import './ProductCard.css';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const ProductCard = ({ image, name, price, brand, productId, onDelete }) => {
    const handleDelete = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'No podrás recuperar este producto una vez eliminado.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product/${productId}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.ok) {
                        Swal.fire(
                            'Eliminado!',
                            'El producto ha sido eliminado.',
                            'success'
                        );
                        onDelete(productId);
                    } else {
                        Swal.fire(
                            'Error!',
                            'No se pudo eliminar el producto.',
                            'error'
                        );
                    }
                } catch (error) {
                    Swal.fire(
                        'Error!',
                        'Ocurrió un error al eliminar el producto.',
                        'error'
                    );
                }
            }
        });
    };

    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price}</p>
                <p className="product-brand">{brand}</p>
            </div>
            <div className="product-buttons">
                <button className="edit-button">Editar</button>
                <button className="delete-button" onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    );
};

export default ProductCard;
