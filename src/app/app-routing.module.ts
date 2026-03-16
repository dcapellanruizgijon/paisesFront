import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-paises', pathMatch: 'full' }, // Ruta por defecto que redirige
  { path: 'lista-paises', component: ListaPaisesComponent },
  { path: '**', component: PageNotFoundComponent } // ruta para las páginas que no se encuentren
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
