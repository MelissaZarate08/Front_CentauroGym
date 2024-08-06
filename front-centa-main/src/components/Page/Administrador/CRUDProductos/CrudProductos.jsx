import React, { useEffect, useState } from "react";
import BarAdministrador from "../../../Organism/BarAdministrador/BarAdministrador";
import Footer from "../../../Templates/Footer/Footer";
import ProductCard from "../../../Molecules/ProductCard/ProductCard";
import './CrudProductos.css';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const CrudProductos = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo obtener la lista de productos.',
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error al obtener los productos.',
                });
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = (productId) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.product_id !== productId));
    };

    return (
        <div className="page-container">
            <BarAdministrador />
            <div className="main-content">
                <div className="product-card-container">
                    {products.map((product) => (
                        <ProductCard
                            key={product.product_id}
                            productId={product.product_id}
                            image={product.image}
                            name={product.name}
                            price={product.precio}
                            brand={product.marca}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CrudProductos;
