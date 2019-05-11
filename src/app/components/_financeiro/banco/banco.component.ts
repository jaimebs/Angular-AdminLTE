import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Banco } from 'src/app/models/banco.models';
import { MensagemService } from 'src/app/services/mensagem.service';
import { BancoService } from 'src/app/services/banco.service';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {
  constructor(private bancoService: BancoService, private mensagemService: MensagemService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['codigo', 'nome', 'site', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Banco>;
  bancos: Array<Banco> = [];

  private configuracaoDataSource() {
    this.dataSource = new MatTableDataSource(this.bancos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listaDebancos() {
    this.bancoService.listar().subscribe(banco => {
      this.bancos = banco;
      this.configuracaoDataSource();
    });
  }

  excluir(id: number) {
    this.mensagemService.deletar(() => {
      this.bancoService.deletar(id).subscribe(() => {
        this.listaDebancos();
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
    this.listaDebancos();
  }
}
