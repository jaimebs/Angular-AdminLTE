import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  usuario: string = '';

  logout() {
    this.loginService.logout();
  }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
  }
}
