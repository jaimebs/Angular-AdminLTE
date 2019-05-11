import { Injectable } from '@angular/core';
import { Banco } from '../models/banco.models';
import { GenericoRestService } from './generico.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BancoService extends GenericoRestService<any> {
  constructor(public http: HttpClient) {
    super(http, `${environment.API_URL}/financeiro/bancos`);
  }
}
