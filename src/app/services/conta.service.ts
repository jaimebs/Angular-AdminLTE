import { Injectable } from '@angular/core';
import { GenericoRestService } from './generico.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Conta } from '../models/conta.models';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends GenericoRestService<Conta> {
  constructor(public http: HttpClient) {
    super(http, `${environment.API_URL}/financeiro/contas`);
  }
}
