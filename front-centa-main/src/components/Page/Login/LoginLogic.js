import Swal from 'sweetalert2';

// Función para validar el formulario de inicio de sesión
export const validateLoginForm = (email, password) => {
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

    return true;
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        console.log('Response Data:', data); // Verifica la respuesta de la API

        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('role_name', data.role_name); // Guardar role_name en localStorage
            return data.role_name;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error de inicio de sesión',
                text: data.message || 'Ocurrió un error al iniciar sesión.',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#00aaff',
            });
            return null;
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: 'Ocurrió un error al iniciar sesión.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#00aaff',
        });
        return null;
    }
};
