import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private mensagemService: MensagemService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['nome', 'email', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Usuario>;
  usuarios: Array<Usuario> = [];

  private configuracaoDataSource() {
    this.dataSource = new MatTableDataSource(this.usuarios);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listaDeUsuarios() {
    this.usuarioService.listar().subscribe(usuario => {
      this.usuarios = usuario;
      this.configuracaoDataSource();
    });
  }

  excluir(id: number) {
    this.mensagemService.deletar(() => {
      this.usuarioService.deletar(id).subscribe(() => {
        this.listaDeUsuarios();
      });
    });
  }

  aplicarFiltro(filtro: string) {
    this.dataSource.filter = filtro.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.listaDeUsuarios();
  }
}
