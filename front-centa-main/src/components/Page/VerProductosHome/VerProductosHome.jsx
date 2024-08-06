import React, { useEffect, useState } from "react";
import BarHome from "../../Organism/BarHome/BarHome";
import Footer from "../../Templates/Footer/Footer";
import CardProductos from "../../Molecules/CardProductos/CardProductos";
import logo from "../../../assets/logoGym.png";
import Swal from 'sweetalert2'; // Importar SweetAlert2
import './VerProductosHome.css';

function VerProductosHome() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
                if (response.ok) {
                    const data = await response.json();
                    console.log("Productos obtenidos:", data);
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

    return (
        <div className="container-home">
            <BarHome src={logo}/>
            <div className="cards-container-home">
                {products.map((product) => (
                    <CardProductos
                        key={product.product_id}
                        imagen={product.image}
                        nombre={product.name}
                        marca={product.marca}
                        precio={product.precio}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default VerProductosHome;
