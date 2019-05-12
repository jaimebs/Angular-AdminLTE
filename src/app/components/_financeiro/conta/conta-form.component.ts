import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/services/conta.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { ActivatedRoute } from '@angular/router';
import { Conta } from 'src/app/models/conta.models';
import { TipoDeMensagem } from 'src/app/emuns.enum';
import { Location } from '@angular/common';
import { BancoService } from 'src/app/services/banco.service';
import { Banco } from 'src/app/models/banco.models';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css']
})
export class ContaFormComponent implements OnInit {
  constructor(
    private _location: Location,
    private contaService: ContaService,
    private bancoService: BancoService,
    private mensagemService: MensagemService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  conta = new Conta();
  bancos: Banco[] = []; //Outra forma de declarar um array
  id: number;

  salvar(conta: Conta) {
    this.contaService.salvar(conta).subscribe(
      () => {
        this.mensagemService.avisoToast('Processo efetuado com sucesso!', TipoDeMensagem.Sucesso);
        this.voltar();
      },
      error => {
        const { mensagem } = error.error;
        this.mensagemService.avisoToast(mensagem, TipoDeMensagem.Erro);
      }
    );
  }

  retornarConta(id: number) {
    this.contaService.listarPorId(id).subscribe(conta => {
      this.conta = conta;
    });
  }

  voltar() {
    this._location.back();
  }

  ngOnInit() {
    this.bancoService.listar().subscribe(banco => (this.bancos = banco));
    if (this.id) this.retornarConta(this.id);
    this.conta.ativo = true;
  }
}
