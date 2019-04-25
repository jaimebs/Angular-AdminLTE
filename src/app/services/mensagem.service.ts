import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  constructor() {}

  aviso(titulo: string, texto: string, tipo: any) {
    Swal.fire({
      type: tipo,
      title: titulo,
      text: texto
    });
  }

  avisoToast(texto: string, tipo: any) {
    Swal.fire({
      position: 'top-end',
      type: tipo,
      text: texto,
      showConfirmButton: false,
      timer: 2500,
      toast: true
    });
  }

  deletar(callback: () => void) {
    Swal.fire({
      title: 'Alerta!',
      text: 'Deseja realmente deletar esse registro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Não, cancelar!',
      reverseButtons: true
    }).then(result => {
      if (result.value) {
        callback();
      }
    });
  }
}
