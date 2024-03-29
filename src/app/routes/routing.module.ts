import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/_seguranca/login/login.component';
import { AuthGuard } from '../auth/auth.guard';
import { UsuarioComponent } from './../components/_seguranca/usuario/usuario.component';
import { HomeComponent } from './../components/common/home/home.component';
import { DashboardComponent } from '../components/_administrativo/dashboard/dashboard.component';
import { NotFoundComponent } from '../components/common/not-found/not-found.component';
import { UsuarioFormComponent } from '../components/_seguranca/usuario/usuario-form.component';
import { BancoComponent } from '../components/_financeiro/banco/banco.component';
import { BancoFormComponent } from '../components/_financeiro/banco/banco-form.component';
import { ContaComponent } from '../components/_financeiro/conta/conta.component';
import { ContaFormComponent } from '../components/_financeiro/conta/conta-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'financeiro/banco', component: BancoComponent, canActivate: [AuthGuard] },
      { path: 'financeiro/banco/novo', component: BancoFormComponent, canActivate: [AuthGuard] },
      { path: 'financeiro/banco/editar/:id', component: BancoFormComponent, canActivate: [AuthGuard] },
      { path: 'financeiro/conta', component: ContaComponent, canActivate: [AuthGuard] },
      { path: 'financeiro/conta/novo', component: ContaFormComponent, canActivate: [AuthGuard] },
      { path: 'financeiro/conta/editar/:id', component: ContaFormComponent, canActivate: [AuthGuard] },
      { path: 'seguranca/usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
      { path: 'seguranca/usuario/novo', component: UsuarioFormComponent, canActivate: [AuthGuard] },
      { path: 'seguranca/usuario/editar/:id', component: UsuarioFormComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
