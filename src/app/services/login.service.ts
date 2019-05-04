import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from './../models/login.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private http: HttpClient) {}

  logar(login: Login) {
    return this.http.post(`${environment.API_URL}/seguranca/usuarios/logar`, login);
  }

  logout() {
    this.limparDadosLogin();
    this.router.navigate(['/login']);
  }

  limparDadosLogin() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  }
}
