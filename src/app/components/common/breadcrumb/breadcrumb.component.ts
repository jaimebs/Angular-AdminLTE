import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  constructor() {}

  @Input() principal: string = '';
  @Input() pequeno: string = '';
  @Input() form: string = '';

  ngOnInit() {}
}
