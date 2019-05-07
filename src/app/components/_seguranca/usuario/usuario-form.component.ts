import { MensagemService } from 'src/app/services/mensagem.service';
import { Usuario } from './../../../models/usuario.models';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TipoDeMensagem } from 'src/app/emuns.enum';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  constructor(
    private _location: Location,
    private usuarioService: UsuarioService,
    private mensagemService: MensagemService
  ) {}

  usuario = new Usuario();

  salvar(usuario: Usuario) {
    this.usuarioService.salvar(usuario).subscribe(
      () => {
        this.mensagemService.avisoToast('Usuário cadastrado com sucesso!', TipoDeMensagem.Sucesso);
        this.voltar();
      },
      error => {
        const { mensagem } = error.error;
        this.mensagemService.avisoToast(mensagem, TipoDeMensagem.Erro);
      }
    );
  }

  voltar() {
    this._location.back();
  }

  ngOnInit() {}
}
