import { Injectable } from '@angular/core';
import { SimpleCrypt } from 'ngx-simple-crypt';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {}

  private simpleCrypt = new SimpleCrypt();

  deletaRegistroArray(item, array) {
    let index = array.indexOf(item);
    if (index >= 0) array.splice(index, 1);
  }

  criptografarTexto(texto: string) {
    return this.simpleCrypt.encode('strongsys', texto);
  }

  desriptografarTexto(textoCriptrografado: string) {
    return this.simpleCrypt.decode('strongsys', textoCriptrografado);
  }
}
