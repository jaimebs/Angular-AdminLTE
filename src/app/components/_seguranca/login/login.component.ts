import { Login } from './../../../models/login.models';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  login = new Login();

  entrar(login: Login) {
    this.loginService.logar(login);
  }

  ngOnInit() {}
}
