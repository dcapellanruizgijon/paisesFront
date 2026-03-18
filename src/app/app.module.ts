import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AgregarPaisComponent } from './agregar-pais/agregar-pais.component';
import { MisPaisesComponent } from './mis-paises/mis-paises.component';
import { EditarPaisComponent } from './editar-pais/editar-pais.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficaComponent } from './grafica/grafica.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPaisesComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AgregarPaisComponent,
    MisPaisesComponent,
    EditarPaisComponent,
    GraficaComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
