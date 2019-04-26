import { UtilService } from './util.service';
import { Router } from '@angular/router';
import { TipoDeMensagem } from './../emuns.enum';
import { MensagemService } from './mensagem.service';
import { Login } from './../models/login.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private mensagemService: MensagemService, private utilService: UtilService) {}

  public autenticado: boolean = false;

  logar(login: Login) {
    if (login.email === 'email' && login.senha === '12345') {
      this.autenticado = true;
      localStorage.setItem('tokenLte', '12345');
      localStorage.setItem('usuario', 'Jaime Barbosa');
      window.location.href = '/dashboard';
    } else {
      this.limparDadosLogin();
      this.mensagemService.avisoToast('Login ou senha inválidos', TipoDeMensagem.Alerta);
    }
  }

  logout() {
    this.limparDadosLogin();
    this.router.navigate(['/login']);
  }

  limparDadosLogin() {
    this.autenticado = false;
    localStorage.removeItem('usuario');
    localStorage.removeItem('tokenLte');
  }
}
