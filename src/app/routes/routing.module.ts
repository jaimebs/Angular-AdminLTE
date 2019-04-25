import { UsuarioComponent } from './../components/_seguranca/usuario/usuario.component';
import { HomeComponent } from './../components/common/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/_administrativo/dashboard/dashboard.component';
import { LoginComponent } from '../components/_seguranca/login/login.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [{ path: '', redirectTo: 'login', pathMatch: 'full' }, { path: 'login', component: LoginComponent }]
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
