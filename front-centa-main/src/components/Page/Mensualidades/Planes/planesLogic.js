import Swal from "sweetalert2";
import './sweetalert2-custom.css';

export const showPlanAlert = (planData) => {
    const { title, price } = planData;

    const coachAvailable = title !== 'Plan Básico';
    const coachChecked = title === 'Plan Avanzado' || title === 'Plan Premium' || title === 'Plan Familiar';

    Swal.fire({
        title: `Completa los datos para el ${title}`,
        html: `
            <div>
                <label for="user_id">ID de Usuario:</label>
                <input id="user_id" class="swal2-input" placeholder="ID de Usuario" required>
            </div>
            <div>
                <label for="precio">Precio:</label>
                <input id="precio" class="swal2-input" type="number" placeholder="Precio" value="${price.replace('$', '')}" required readonly>
            </div>
            <div>
                <label for="paquete">Paquete:</label>
                <input id="paquete" class="swal2-input" value="${title}" required readonly>
            </div>
            <div>
                <label for="coach">Coach:</label>
                <div class="swal2-coach-container">
                    ${coachAvailable ? `
                        <div class="swal2-checkbox">
                            <input type="checkbox" id="coachYes" ${coachChecked ? 'checked' : ''}>
                            <label for="coachYes" class="swal2-checkbox-label swal2-checkbox-yes">Sí</label>
                        </div>
                        <div class="swal2-checkbox">
                            <input type="checkbox" id="coachNo" ${coachChecked ? '' : 'checked'}>
                            <label for="coachNo" class="swal2-checkbox-label swal2-checkbox-no">No</label>
                        </div>
                    ` : `
                        <div class="swal2-coach-text">Coach: Sí No</div>
                    `}
                </div>
            </div>
        `,
        focusConfirm: false,
        confirmButtonText: 'Enviar',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        preConfirm: () => {
            const userId = Swal.getPopup().querySelector('#user_id').value;
            const precio = Swal.getPopup().querySelector('#precio').value;
            const paquete = Swal.getPopup().querySelector('#paquete').value;

            if (!userId || !precio || !paquete) {
                Swal.showValidationMessage('Por favor, completa todos los campos.');
                return false;
            }

            const coachYesChecked = Swal.getPopup().querySelector('#coachYes')?.checked;
            const coachNoChecked = Swal.getPopup().querySelector('#coachNo')?.checked;

            if (coachYesChecked && coachNoChecked) {
                Swal.showValidationMessage('Por favor, selecciona solo una opción para el coach.');
                return false;
            }

            return {
                userId,
                precio,
                paquete,
                coachRequired: coachYesChecked || false
            };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('Datos recibidos:', result.value);
            Swal.fire('¡Gracias!', 'Tu compra ha sido registrada.', 'success');
        }
    });
};
