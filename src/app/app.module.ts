import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    FiltroPipe,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RoutingModule, Interceptor],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
