import { jsPDF } from 'jspdf';
import Swal from 'sweetalert2';

export const useVenderProductoLogic = () => {
    const handleGeneratePDF = (reference, formData) => {
        const doc = new jsPDF();
        const price = parseFloat(formData.price);
        const cantidad = parseInt(formData.cantidad);
        const total = price * cantidad;

        doc.text('Recibo de Venta', 20, 20);
        doc.text(`Referencia: ${reference}`, 20, 30);
        doc.text(`Precio unitario: ${price.toFixed(2)}`, 20, 40);
        doc.text(`Cantidad: ${cantidad}`, 20, 50);
        doc.text(`Total a pagar: ${total.toFixed(2)}`, 20, 60);
        doc.text(`ID: ${formData.id}`, 20, 70);
        doc.text(`Nombre: ${formData.name}`, 20, 80);
        doc.text(`Marca: ${formData.brand}`, 20, 90);
        doc.save(`Recibo_${reference}.pdf`);
    };

    const handleConfirm = async (setReference, formData) => {
        //Genera un numero de referencia
        const generatedReference = `REF-${Math.floor(Math.random() * 1000000)}`;
        setReference(generatedReference);

        Swal.fire({
            title: '¿Qué deseas hacer?',
            text: 'Elige una opción:',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Generar Recibo',
            cancelButtonText: 'Pagar',
            confirmButtonColor: '#00aaff',
            cancelButtonColor: '#0077cc',
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Generate PDF
                handleGeneratePDF(generatedReference, formData);
            } else {
                // Add sale to the database
                try {
                    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sale`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            product_id: formData.id,
                            precio: formData.price,
                            cantidad: formData.cantidad,
                            created_by: 'Empleado',
                            created_at: new Date(),
                            updated_by: 'Empleado',
                            updated_at: new Date(),
                            deleted: false
                        }),
                    });

                    if (response.ok) {
                        Swal.fire('Pago realizado', 'La venta ha sido registrada exitosamente', 'success');
                    } else {
                        Swal.fire('Error', 'No se pudo registrar la venta', 'error');
                    }
                } catch (error) {
                    Swal.fire('Error', 'Hubo un problema al registrar la venta', 'error');
                }
            }
        });
    };

    const validateFormData = (formData) => {
        const { price, id, name, brand, cantidad } = formData;

        // Ensure all fields are filled out and valid
        if (!price || !id || !name || !brand || !cantidad) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos deben estar llenos',
            });
            return false;
        }

        // Convert values to strings and trim whitespace
        const priceStr = String(price).trim();
        const idStr = String(id).trim();
        const nameStr = String(name).trim();
        const brandStr = String(brand).trim();
        const cantidadStr = String(cantidad).trim();

        if (priceStr === '' || idStr === '' || nameStr === '' || brandStr === '' || cantidadStr === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos deben estar llenos',
            });
            return false;
        }

        if (parseFloat(priceStr) <= 0 || parseInt(idStr) <= 0 || parseInt(cantidadStr) <= 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El precio, ID y cantidad deben ser números positivos',
            });
            return false;
        }

        return true;
    };

    return { handleGeneratePDF, handleConfirm, validateFormData };
};
