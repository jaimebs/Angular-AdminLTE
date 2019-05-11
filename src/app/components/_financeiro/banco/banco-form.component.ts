import { Component, OnInit } from '@angular/core';
import { BancoService } from 'src/app/services/banco.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Banco } from 'src/app/models/banco.models';
import { TipoDeMensagem } from 'src/app/emuns.enum';

@Component({
  selector: 'app-banco-form',
  templateUrl: './banco-form.component.html',
  styleUrls: ['./banco-form.component.css']
})
export class BancoFormComponent implements OnInit {
  constructor(
    private _location: Location,
    private bancoService: BancoService,
    private mensagemService: MensagemService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  banco = new Banco();
  id: number;

  salvar(banco: Banco) {
    this.bancoService.salvar(banco).subscribe(
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

  retornarBanco(id: number) {
    this.bancoService.listarPorId(id).subscribe(banco => {
      this.banco = banco;
    });
  }

  voltar() {
    this._location.back();
  }

  ngOnInit() {
    if (this.id) this.retornarBanco(this.id);
  }
}
