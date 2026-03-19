import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { MisPaisesComponent } from './mis-paises/mis-paises.component';
import { AgregarPaisComponent } from './agregar-pais/agregar-pais.component';
import { EditarPaisComponent } from './editar-pais/editar-pais.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-paises', pathMatch: 'full' }, // Ruta por defecto que redirige
  { path: 'lista-paises', component: ListaPaisesComponent },
  { path: 'mis-paises', component: MisPaisesComponent },
  { path: 'agregar-pais', component: AgregarPaisComponent },
  { path: 'editar-pais/:id', component: EditarPaisComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: PageNotFoundComponent } // ruta para las páginas que no se encuentren
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
