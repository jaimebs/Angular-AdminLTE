import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericoRestService } from './generico.service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericoRestService<any> {
  constructor(public http: HttpClient) {
    super(http, `${environment.API_URL}/seguranca/usuarios`);
  }
}
