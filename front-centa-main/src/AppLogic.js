import Swal from "sweetalert2";

export const showWelcomeAlert = async () => {
  await Swal.fire({
    title: "¡Bienvenido a Centauro Gym!",
    text: "Estamos felices de tenerte con nosotros.",
    icon: "success",
    confirmButtonText: "OK",
  });

  await Swal.fire({
    title: "¡Has ganado 50 puntos!",
    text: "Has ganado 50 puntos por unirte a Centauro Gym.",
    icon: "info",
    confirmButtonText: "OK",
  });
};
