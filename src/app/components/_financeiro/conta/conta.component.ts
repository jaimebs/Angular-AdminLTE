import { Component, OnInit, ViewChild } from '@angular/core';
import { ContaService } from 'src/app/services/conta.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Conta } from 'src/app/models/conta.models';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
  constructor(private contaService: ContaService, private mensagemService: MensagemService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['nome', 'banco', 'ativo', 'editar', 'excluir'];
  dataSource: MatTableDataSource<Conta>;
  contas: Array<Conta> = [];

  private configuracaoDataSource() {
    this.dataSource = new MatTableDataSource(this.contas);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  listaDeContas() {
    this.contaService.listar().subscribe(conta => {
      this.contas = conta;
      this.configuracaoDataSource();
    });
  }

  excluir(id: number) {
    this.mensagemService.deletar(() => {
      this.contaService.deletar(id).subscribe(() => {
        this.listaDeContas();
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
    this.listaDeContas();
  }
}
