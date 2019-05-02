import { Login } from './../../../models/login.models';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TipoDeMensagem } from 'src/app/emuns.enum';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private mensagemService: MensagemService) {}

  login = new Login();

  entrar(login: Login) {
    this.loginService.logar(login).subscribe(
      (dados: any) => {
        const { token, usuario_nome } = dados;
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', usuario_nome);
        window.location.href = '/dashboard';
      },
      error => {
        const { mensagem } = error.error;
        this.loginService.limparDadosLogin();
        this.mensagemService.avisoToast(mensagem, TipoDeMensagem.Alerta);
      }
    );
  }

  ngOnInit() {}
}
