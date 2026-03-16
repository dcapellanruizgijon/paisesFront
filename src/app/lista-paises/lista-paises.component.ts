import { Component, OnInit } from '@angular/core';
import { ApiRestCountriesService } from '../api-rest-countries.service';
import { Pais } from '../pais';

@Component({
  selector: 'app-lista-paises',
  standalone: false,
  templateUrl: './lista-paises.component.html',
  styleUrl: './lista-paises.component.css'
})

export class ListaPaisesComponent implements OnInit{
  paises: Pais[] = [];
  cargando: boolean = false;//solo se mostrará cuando sea true (por el if del htmls)
  error: string = '';

  constructor(private serv: ApiRestCountriesService){}
  
  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.cargando = true;
    this.serv.getAllPaises().subscribe({
      next: (data) => {
        this.paises = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los alumnos';
        console.error(err);
        this.cargando = false;
      }
    });
  }

}
