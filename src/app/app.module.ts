import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/_seguranca/login/login.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { SidebarComponent } from './components/common/sidebar/sidebar.component';
import { DashboardComponent } from './components/_administrativo/dashboard/dashboard.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { HomeComponent } from './components/common/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routes/routing.module';
import { Interceptor } from './auth/interceptor.module';
import { UsuarioComponent } from './components/_seguranca/usuario/usuario.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { UsuarioFormComponent } from './components/_seguranca/usuario/usuario-form.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { BancoComponent } from './components/_financeiro/banco/banco.component';
import { BancoFormComponent } from './components/_financeiro/banco/banco-form.component';
import { ContaComponent } from './components/_financeiro/conta/conta.component';
import { ContaFormComponent } from './components/_financeiro/conta/conta-form.component';
import { OrderbyPipe } from './pipes/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    FiltroPipe,
    HomeComponent,
    UsuarioComponent,
    NotFoundComponent,
    UsuarioFormComponent,
    BreadcrumbComponent,
    BancoComponent,
    BancoFormComponent,
    ContaComponent,
    ContaFormComponent,
    OrderbyPipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RoutingModule, Interceptor, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
