import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  constructor() {}

  usuario: string = '';

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
  }
}
