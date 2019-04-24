import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  login = {};
  autenticado: boolean = true;

  entrar(login) {
    if (login.email === 'email' && login.senha === '12345') {
      this.autenticado = true;
      localStorage.setItem('tokenLte', '12345');
      window.location.href = '/dashboard';
    } else {
      localStorage.removeItem('tokenLte');
      this.autenticado = false;
    }
  }

  ngOnInit() {}
}
