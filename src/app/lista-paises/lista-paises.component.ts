import { Component, OnInit } from '@angular/core';
import { ApiRestCountriesService } from '../api-rest-countries.service';
import { Pais } from '../pais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-paises',
  standalone: false,
  templateUrl: './lista-paises.component.html',
  styleUrl: './lista-paises.component.css'
})
export class ListaPaisesComponent implements OnInit {
  paises: Pais[] = [];
  paisesFiltrados: Pais[] = [];
  cargando: boolean = false;
  error: string = '';

  constructor(private serv: ApiRestCountriesService, private router: Router) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises(): void {
    this.cargando = true;
    this.serv.getAllPaises().subscribe({
      next: (data: any) => {
        this.paises = data.map((p: any) => ({
          nombre: p.name?.common || 'Desconocido',
          miembroOnu: p.unMember || false,
          moneda: p.currencies ? (Object.values(p.currencies)[0] as any)?.name + ' (' + (Object.values(p.currencies)[0] as any)?.symbol + ')' : 'No disponible',
          capital: p.capital?.[0] || 'No tiene capital',
          region: p.region || 'Desconocida',
          banderas: p.flags?.png || '',
          poblacion: p.population || 0
        }));
        this.paisesFiltrados = [...this.paises];
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Error al cargar los países';
        this.cargando = false;
      }
    });
  }

  buscarPais(event: any): void {
    const termino = event.target.value.toLowerCase().trim();
    if (termino === '') {
      this.paisesFiltrados = [...this.paises];
    } else {
      this.paisesFiltrados = this.paises.filter(pais =>
        pais.nombre.toLowerCase().includes(termino)
      );
    }
  }

  irAAgregarPais(pais: any): void {
    // Guardar en sessionStorage como respaldo
    sessionStorage.setItem('paisSeleccionado', JSON.stringify(pais));
    // Navegar
    this.router.navigate(['/agregar-pais']);
  }
}