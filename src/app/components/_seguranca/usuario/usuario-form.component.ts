import { MensagemService } from 'src/app/services/mensagem.service';
import { Usuario } from './../../../models/usuario.models';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TipoDeMensagem } from 'src/app/emuns.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  constructor(
    private _location: Location,
    private usuarioService: UsuarioService,
    private mensagemService: MensagemService,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  usuario = new Usuario();
  id: number;

  salvar(usuario: Usuario) {
    this.usuarioService.salvar(usuario).subscribe(
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

  retornarUsuario(id: number) {
    this.usuarioService.listarPorId(id).subscribe(usuario => {
      this.usuario = { ...usuario, password: null };
    });
  }

  voltar() {
    this._location.back();
  }

  ngOnInit() {
    if (this.id) this.retornarUsuario(this.id);
  }
}
