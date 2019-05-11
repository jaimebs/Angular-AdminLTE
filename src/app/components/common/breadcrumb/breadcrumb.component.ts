import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Input() principal: string = '';
  titulo: string = '';
  pequeno: string = '';
  form: string = '';

  private propriedades() {
    const [, , titulo, form] = this.router.url.split('/');
    this.titulo = this.principal || _.capitalize(titulo);
    this.pequeno = form ? 'Formuário' : 'Listagem';
    this.form = form ? _.capitalize(form) : 'Lista';
  }

  ngOnInit() {
    this.propriedades();
  }
}
