import { TipoDeMensagem } from './../emuns.enum';
import { MensagemService } from './mensagem.service';
import { Login } from './../models/login.models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private mensagemService: MensagemService) {}

  public autenticado: boolean = false;

  logar(login: Login) {
    if (login.email === 'email' && login.senha === '12345') {
      this.autenticado = true;
      localStorage.setItem('tokenLte', '12345');
      window.location.href = '/dashboard';
    } else {
      localStorage.removeItem('tokenLte');
      this.autenticado = false;
      this.mensagemService.avisoToast('Login ou senha inválidos', TipoDeMensagem.Alerta);
    }
  }
}
