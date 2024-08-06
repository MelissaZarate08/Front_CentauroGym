// src/utils/RegisterLogic.js

import Swal from 'sweetalert2';

export const validateRegisterForm = (name, email, password, confirmPassword) => {
    // Email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa tu nombre.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    if (!email) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa tu correo electrónico.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'warning',
            title: 'Correo electrónico inválido',
            text: 'Por favor, ingresa un correo electrónico válido.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    if (!password) {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, ingresa tu contraseña.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'warning',
            title: 'Contraseñas no coinciden',
            text: 'Por favor, asegúrate de que las contraseñas coincidan.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return false;
    }

    return true;
};

export const registerUser = async (name, email, password, confirmPassword, role_name = 'Empleado') => {
    // Validar los datos del formulario
    const isValid = validateRegisterForm(name, email, password, confirmPassword);
    if (!isValid) {
        return;
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                role_name,
            }),
        });        

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: '¡Te has registrado correctamente!',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#00aaff',
            });
        } else {
            const errorData = await response.json();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorData.message || 'Hubo un error al registrar el usuario.',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#00aaff',
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al conectar con el servidor.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
    }
};
