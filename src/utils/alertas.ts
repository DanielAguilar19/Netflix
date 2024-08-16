import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

export function show_alerta(mensaje: string, icono: 
                            'success' | 'error' | 'warning' | 'info' | 'question',
                             foco: string = ""): void {
    if (foco !== "") {
      const focoElement = document.getElementById(foco);
      if (focoElement) {
        focoElement.focus();
      }
    }
    Swal.fire({
      title: mensaje,
      icon: icono,
      timer: 1000,
      showConfirmButton: false,
      background: '#282C34',
      customClass: {
        popup: 'sweetalert-popup',
        icon: 'sweetalert-icon',
        confirmButton: 'sweetalert-confirm',
        cancelButton: 'sweetalert-cancel',
      },
    });
  }
