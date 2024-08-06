import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarEmpleado from "../../../Organism/BarEmpleado/BarEmpleado";
import Footer from "../../../Templates/Footer/Footer";
import CardProductos from "../../../Molecules/CardProductos/CardProductos";
import './VerProductos.css';
import Swal from 'sweetalert2';

function VerProductos() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.length === 0) {
                        Swal.fire({
                            icon: 'info',
                            title: 'Sin productos',
                            text: 'No hay productos disponibles en este momento.',
                        });
                    } else {
                        setProducts(data);
                    }
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

    const handleSell = (product) => {
        navigate('/vender-productos', { state: { product } });
    };

    return (
        <div className="container">
            <BarEmpleado />
            <div className="cards-container">
                {products.map((product) => (
                    <CardProductos
                        key={product.product_id}
                        imagen={product.image}
                        nombre={product.name}
                        marca={product.marca}
                        precio={product.precio}
                        onSell={() => handleSell(product)}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default VerProductos;
